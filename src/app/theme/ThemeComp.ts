import { Component, HostListener, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComp } from './content/ContentComp';
import { HeaderComp } from './header/HeaderComp';
import { FooterComp } from './footer/FooterComp';
import { ResponsiveMenuComp } from './responsive_menu/ResponsiveMenuComp';
import { AdminMenuComp } from './admin_menu/AdminMenuComp';
import { AdminMenu2Comp } from "./admin_menu2/AdminMenu2Comp";

@Component({
  selector: 'ThemeComp',
  templateUrl: 'ThemeComp.html',
  standalone: true,
  imports: [CommonModule, ContentComp, HeaderComp, FooterComp, AdminMenuComp, ResponsiveMenuComp, AdminMenu2Comp]
})

export class ThemeComp implements OnInit {

  isLeftSidebarCollapsed = signal<boolean>(true);
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