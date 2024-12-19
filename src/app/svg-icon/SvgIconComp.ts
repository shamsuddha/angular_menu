import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'SvgIconComp',
  templateUrl: 'SvgIconComp.html',
  styleUrls: ['SvgIconComp.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class SvgIconComp implements OnInit {

  @Input() iconName!: string; // Name of the icon (from icons.svg)
  @Input() iconColor: string = '#000'; // Default to black

  constructor() { }

  ngOnInit() { }

}