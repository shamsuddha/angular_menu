import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveMenuItemList } from './ResponsiveMenuItemList';
import { MenuItem } from '../../MenuItem';

@Component({
  selector: 'ResponsiveMenuComp',
  templateUrl: 'ResponsiveMenuComp.html',
  styleUrls: ['ResponsiveMenuComp.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class ResponsiveMenuComp implements OnInit {

  constructor() { }

  ngOnInit() { }

  // Menu list
  menuItemList: Array<MenuItem> = ResponsiveMenuItemList;
  

  isMainMenuOpen: boolean = false; // Track main menu state

  toggleDropdown(id: string | null) {

    if (!id)
      return;

    for (let level1 of this.menuItemList) {
      //console.log(level1);
      if (level1.id === id) {
        this.closeAllMenus(this.menuItemList);
        level1.closed = !level1.closed;
        break;
      }
      if (level1.subMenuItemList.length > 0) {
        for (let level2 of level1.subMenuItemList) {
          if (level2.id === id) {
            this.closeAllMenus(level1.subMenuItemList);
            level2.closed = !level2.closed;
            break;
          }
          if (level2.subMenuItemList.length > 0) {
            for (let level3 of level2.subMenuItemList) {
              if (level3.id === id) {
                this.closeAllMenus(level2.subMenuItemList);
                level3.closed = !level3.closed;
                break;
              }
              if (level3.subMenuItemList.length > 0) {
                for (let level4 of level3.subMenuItemList) {
                  if (level4.id === id) {
                    this.closeAllMenus(level3.subMenuItemList);
                    level4.closed = !level4.closed;
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Close all dropdowns if clicked outside
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar')) {
      this.closeAllMenus(this.menuItemList);
    }
  }

  // Function to close all submenus by setting 'closed' to true recursively
  closeAllMenus(items: Array<MenuItem>) {
    items.forEach(item => {
      item.closed = true;
      if (item.subMenuItemList.length) {
        this.closeAllMenus(item.subMenuItemList);
      }
    });
  }
}
