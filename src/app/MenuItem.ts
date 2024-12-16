
export class MenuItem {

  id: string | null = null;
  routerLink: string | null = null;
  label: string | null = null;
  icon: string | null = null;
  closed: boolean = true;
  subMenuItemList: Array<MenuItem> = [];

  constructor(o?: Partial<MenuItem>) {
    Object.assign(this, o);
  }
}