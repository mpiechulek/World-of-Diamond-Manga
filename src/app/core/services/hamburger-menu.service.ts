import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HamburgerMenuService {

  private isOpen:boolean = false;

  constructor() { }

  getOpenState() {

    this.isOpen = !this.isOpen;

    return this.isOpen;

  }

}
