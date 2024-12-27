import { Component, HostListener, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface MenuItem {
  label: string | null;
  icon: string | null;
  subMenuItemList: MenuItem[];
}

@Component({
  selector: 'AdminMenu2Comp',
  templateUrl: 'AdminMenu2Comp.html',
  styleUrls: ['AdminMenu2Comp.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})

export class AdminMenu2Comp {

  isCollapsed: boolean = false;
  activeSubmenuIndex: number | null = null;  // Tracks active first-level submenu
  nestedSubmenuIndex: { [key: number]: number | null } = {}; // Tracks active second-level submenu for each first-level item
  screenWidth: number = window.innerWidth; // To track the screen width

  menuItemList = [
    {
      id: '1',
      routerLink: 'dashboard',
      icon: 'fa fa-box',
      label: 'Dashboard'
    },
    {
      id: '2',
      routerLink: 'settings',
      icon: 'fa fa-home',
      label: 'Settings'
    },
    {
      id: '3',
      label: 'Multi nav',
      icon: 'fa fa-box',
      subMenuItemList: [
        { 
          id: '31', 
          label: 'Level 1.1', 
          routerLink: '/about-us',
          icon: 'fa fa-box',
        },
        {
          id: '32',
          label: 'Level 1.2',
          icon: 'fa fa-shopping-cart',
          subMenuItemList: [
            { 
              id: '321', 
              label: 'Level 2.1', 
              icon: 'fa fa-home',
              routerLink: '/contact-us',
              subMenuItemList: []
            },
            { 
              id: '323', 
              label: 'Level 2.2', 
              icon: 'fa fa-shopping-cart',
              routerLink: '/help',
              subMenuItemList: []
            }
          ]
        }
      ]
    }
  ];

  constructor() {
    if (this.screenWidth < 768) {
      this.isCollapsed = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.activeSubmenuIndex = null;
    this.nestedSubmenuIndex = {};
  }

  toggleSubmenu(index: number) {
    if (this.activeSubmenuIndex === index) {
      this.activeSubmenuIndex = null;
    } else {
      this.activeSubmenuIndex = index;
    }
  }

  toggleNestedSubmenu(parentIndex: number, childIndex: number) {
    if (!this.nestedSubmenuIndex[parentIndex]) {
      this.nestedSubmenuIndex[parentIndex] = null;
    }
    if (this.nestedSubmenuIndex[parentIndex] === childIndex) {
      this.nestedSubmenuIndex[parentIndex] = null;
    } else {
      this.nestedSubmenuIndex[parentIndex] = childIndex;
    }
  }

  closeSidebar() {
    this.isCollapsed = true;
    this.activeSubmenuIndex = null;
    this.nestedSubmenuIndex = {};
  }
}