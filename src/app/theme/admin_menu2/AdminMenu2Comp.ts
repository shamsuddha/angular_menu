import { Component, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface MenuItem {
  label: string;
  icon?: string;
  submenu?: MenuItem[]; // Define submenu as an optional array of MenuItem objects
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

  menuItemList = [
    {
      label: 'Dashboard',
      icon: 'fa fa-home',
      submenu: null
    },
    {
      label: 'Products',
      icon: 'fa fa-box',
      submenu: [
        { label: 'Add Product', submenu: null },
        {
          label: 'Categories',
          submenu: [
            { label: 'Add Category', submenu: null },
            { label: 'Manage Categories', submenu: null }
          ]
        }
      ]
    },
    {
      label: 'Orders',
      icon: 'fa fa-shopping-cart',
      submenu: [
        { label: 'New Orders', submenu: null },
        { label: 'Order History', submenu: null }
      ]
    }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubmenu(index: number) {
    if (this.activeSubmenuIndex === index) {
      this.activeSubmenuIndex = null;  // Close the submenu if it's already active
    } else {
      this.activeSubmenuIndex = index;  // Open the selected submenu
    }
  }

  toggleNestedSubmenu(parentIndex: number, childIndex: number) {
    if (!this.nestedSubmenuIndex[parentIndex]) {
      this.nestedSubmenuIndex[parentIndex] = null;
    }

    if (this.nestedSubmenuIndex[parentIndex] === childIndex) {
      this.nestedSubmenuIndex[parentIndex] = null; // Close the nested submenu if already active
    } else {
      this.nestedSubmenuIndex[parentIndex] = childIndex; // Open the nested submenu
    }
  }
}