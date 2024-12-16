import { Component, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
//import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { faChevronDown, faChevronRight, faHome, faUser, faBars, faClose, faCog, faPenNib } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'LeftSidebarTwoComp',
  templateUrl: 'LeftSidebarTwoComp.html',
  styleUrls: ['LeftSidebarTwoComp.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})

export class LeftSidebarTwoComp {

  isLeftSidebarCollapsed = input.required<boolean>();
  changeLeftSidebarCollapsed = output<boolean>();
  svgPath =  "M507.7 109.1c-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3-11.3-67.9 74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6 .9-136.6 37.9-39.6 39.6-50.6 97.1-34.1 147.2L18.7 402.8c-25 25-25 65.5 0 90.5 25 25 65.5 25 90.5 0l213.2-213.2c50.1 16.7 107.5 5.7 147.4-34.2 37.1-37.1 49.7-89.3 37.9-136.7zM64 472c-13.3 0-24-10.8-24-24 0-13.3 10.8-24 24-24s24 10.7 24 24c0 13.3-10.8 24-24 24z";
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