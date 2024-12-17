import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'MountainComp',
  template: `
  <p>this is mountain</p>
  `,
  standalone: true,
  imports: [CommonModule]
})

export class MountainComp implements OnInit {

  constructor() { }

  ngOnInit() { }

}