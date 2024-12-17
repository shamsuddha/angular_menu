import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComp } from "./header/HeaderComp";
import { FooterComp } from "./footer/FooterComp";
import { ContentComp } from "./content/ContentComp";
import { AdminMenuComp } from './admin_menu/AdminMenuComp';
import { ResponsiveMenuComp } from "./responsive_menu/ResponsiveMenuComp";

@Component({
  selector: 'ThemeComp',
  template: `
  <HeaderComp></HeaderComp>
  <!-- <AdminMenuComp [isLeftSidebarCollapsed] = "isLeftSidebarCollapsed()" 
(changeLeftSidebarCollapsed)="changeLeftSidebarCollapsed($event)"></AdminMenuComp> -->
<ResponsiveMenuComp></ResponsiveMenuComp>
  <ContentComp>

  </ContentComp>
  <FooterComp></FooterComp>
  `,
  standalone: true,
  imports: [CommonModule, AdminMenuComp, HeaderComp, FooterComp, ContentComp, ResponsiveMenuComp]
})

export class ThemeComp implements OnInit {

  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  constructor() { }

  ngOnInit() { }

  changeLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

}