import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'FooterComp',
  template: `
  <h1>this is footer comp</h1>
  `,
  standalone: true,
  imports: [CommonModule]
})

export class FooterComp implements OnInit {

  constructor() { }

  ngOnInit() { }

}