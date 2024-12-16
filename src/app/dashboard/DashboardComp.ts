import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../service/SidebarService';

@Component({
  selector: 'DashboardComp',
  templateUrl: 'DashboardComp.html',
  styleUrls: ['DashboardComp.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class DashboardComp implements OnInit {

  isCollapsed = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.isCollapsed$.subscribe((collapsed) => {
      this.isCollapsed = collapsed;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar(); // Toggle sidebar using service
  }

  ngOnInit() { }

}