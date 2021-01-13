import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HamburgerMenuService {

  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen: boolean;
  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.isOpen = false;
    // }, 10);

    this.isOpenSubject.next(this.isOpen);
  }

  getOpenState() {
    return this.isOpenSubject;
  }

  getChangeOpenState() {
    this.isOpen = !this.isOpen;
    this.isOpenSubject.next(this.isOpen);
    return this.isOpenSubject.asObservable();
  }

}
