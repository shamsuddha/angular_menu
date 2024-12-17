import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'SvgIconComp',
  templateUrl: 'SvgIconComp.html',
  styleUrls: ['SvgIconComp.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class SvgIconComp implements OnInit {

  constructor() { }

  ngOnInit() { }

  @HostBinding('style.-webkit-mask-image')
  private _path!: string;

  @Input()
  public set path(filePath: string) {
    this._path = `url("${filePath}")`;
  }

}