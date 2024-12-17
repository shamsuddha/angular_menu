import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  template: '',
  styleUrls: ['./SvgIconComp.scss'],
  standalone: true
})
export class SvgIconComponent {

  @HostBinding('style.mask-image')
  @HostBinding('style.-webkit-mask-image')
  private _path: string = "";

  @Input() set path(value: string) {
    this._path = `url(${value})`;
  }

  constructor() {}
}
