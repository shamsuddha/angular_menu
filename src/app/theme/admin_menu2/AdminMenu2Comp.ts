import { Component, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface MenuItem {
  id: string;
  routerLink?: string;
  label: string;
  subMenuItemList?: MenuItem[];
}

@Component({
  selector: 'AdminMenu2Comp',
  templateUrl: 'AdminMenu2Comp.html',
  styleUrls: ['AdminMenu2Comp.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})

export class AdminMenu2Comp {
  menuItemList: MenuItem[] = [
    {
      id: '1',
      routerLink: 'dashboard',
      label: 'Dashboard'
    },
    {
      id: '2',
      routerLink: 'settings',
      label: 'Settings'
    },
    {
      id: '3',
      label: 'Multi nav',
      subMenuItemList: [
        { id: '31', label: 'Level 3.1', routerLink: '/about-us' },
        {
          id: '32',
          label: 'Level 3.2',
          subMenuItemList: [
            { id: '321', label: 'Level 3.1', routerLink: '/contact-us' },
            { id: '323', label: 'Level 3.2', routerLink: '/help' }
          ]
        }
      ]
    }
  ];

  activeSubmenuIndex: number | null = null; 

  toggleSubmenu(index: number) {
    this.activeSubmenuIndex = this.activeSubmenuIndex === index ? null : index;
  }


}