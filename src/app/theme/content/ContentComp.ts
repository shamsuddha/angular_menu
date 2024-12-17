import { Component, computed, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ContentComp',
  templateUrl: 'ContentComp.html',
  styleUrls: ['ContentComp.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet]
})

export class ContentComp implements OnInit {

  isLeftSidebarCollapsed = input.required<boolean>();
  screenWidth = input.required<number>();
  sizeClass = computed(() => {
    const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed();
    if (isLeftSidebarCollapsed) {
      return '';
    }
    return this.screenWidth() > 768 ? 'body-trimmed' : 'body-md-screen';
  });

  constructor() { }

  ngOnInit() { }

}