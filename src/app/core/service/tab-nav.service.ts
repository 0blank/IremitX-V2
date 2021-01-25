import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabNavService {
  public tabItems = new BehaviorSubject<Object[]>([{ name: "Home", link: "home" }, { name: "Report", link: "report" }]);

  constructor() { }

  public addToTabItems(v: any) {
    const isAvailable = this.tabItems.value.find((res: any) => res.name === v.name)
    !isAvailable && this.tabItems.next(this.tabItems.getValue().concat(v));
  }

  public removeFromTabItems(v: Object) {
    this.tabItems.next(this.tabItems.getValue().filter(res => res !== v));
  }

}
