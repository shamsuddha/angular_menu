import { Component, computed, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'LayoutComp',
  templateUrl: 'LayoutComp.html',
  styleUrls: ['LayoutComp.scss'],
  standalone: true,
  imports: [RouterOutlet, CommonModule]
})

export class LayoutComp implements OnInit {

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