import { Component, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { SvgIconComponent } from '../../svg_icon/SvgIconComp';
//import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { faChevronDown, faChevronRight, faHome, faUser, faBars, faClose, faCog, faPenNib } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'AdminMenuComp',
  templateUrl: 'AdminMenuComp.html',
  styleUrls: ['AdminMenuComp.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, SvgIconComponent]
})

export class AdminMenuComp {

  isLeftSidebarCollapsed = input.required<boolean>();
  changeLeftSidebarCollapsed = output<boolean>();
  menuItemList = [
    {
      id: '1',
      routerLink: 'dashboard',
      //icon: ,
      label: 'Dashboard'
    },
    {
      id: '2',
      routerLink: 'settings',
      //icon: ,
      label: 'Settings'
    },
    {
      id: '3',
      label: 'Multi nav',
      //icon: ,
      subMenuItemList: [
        { id: '31', label: 'Level 1.1', routerLink: '/about-us' },
        {
          id: '32',
          label: 'Level 1.2',
          //icon: ,
          subMenuItemList: [
            { id: '321', label: 'Level 2.1', routerLink: '/contact-us' },
            { id: '323', label: 'Level 2.2', routerLink: '/help' }
          ]
        }
      ]
    }
  ];

  // Object to track the open/closed state of each submenu
  menuStates: { [key: string]: boolean } = {};

  toggleMenu(menuId: string): void {
    // Toggle the menu state
    this.menuStates[menuId] = !this.menuStates[menuId];
    this.changeLeftSidebarCollapsed.emit(false);
  }

  toggleCollapse(): void {
    this.changeLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidebar(): void {
    this.changeLeftSidebarCollapsed.emit(true);
  }

}