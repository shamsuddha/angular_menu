import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'HeaderComp',
  template: `
  <h1>this is for header</h1>
  `,
  standalone: true,
  imports: [CommonModule]
})

export class HeaderComp implements OnInit {

  constructor() { }

  ngOnInit() { }

}