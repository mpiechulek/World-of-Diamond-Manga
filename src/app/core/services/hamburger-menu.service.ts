import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HamburgerMenuService {

  private isOpenSubject= new BehaviorSubject<boolean>(false);
  isOpen: boolean= false;
  constructor() { }

  getOpenState() {
    this.isOpen = !this.isOpen;
    this.isOpenSubject.next(this.isOpen);
    return this.isOpenSubject.asObservable();
  }

}
