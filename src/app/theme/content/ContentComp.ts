import { Router, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ContentComp',
  template: `
  <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [CommonModule, RouterOutlet]
})

export class ContentComp implements OnInit {

  constructor() { }

  ngOnInit() { }

}