import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'RiverComp',
  template: `
  <p>this is river</p>
  `,
  standalone: true,
  imports: [CommonModule]
})

export class RiverComp implements OnInit {

  constructor() { }

  ngOnInit() { }

}