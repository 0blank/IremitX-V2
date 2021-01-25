import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private _sidebarState: string = 'active';

  constructor() { }

  public get sidebarState(): string {
    return this._sidebarState;
  }

  public set sidebarState(v: string) {
    this._sidebarState = v;
  }

}