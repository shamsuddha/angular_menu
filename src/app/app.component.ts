import { Component, HostListener, OnInit, signal } from '@angular/core';
import { LayoutComp } from "./layout/LayoutComp";
import { AdminMenuComp } from "./theme/admin_menu/AdminMenuComp";
import { RouterOutlet } from '@angular/router';
import { ResponsiveMenuComp } from './theme/responsive_menu/ResponsiveMenuComp';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdminMenuComp, LayoutComp, RouterOutlet, ResponsiveMenuComp],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  @HostListener('window:resize')
  
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }
  
  changeLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
