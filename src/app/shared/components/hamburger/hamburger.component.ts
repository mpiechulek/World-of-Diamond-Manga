import { Component, OnInit } from '@angular/core';
import { HamburgerMenuService } from 'src/app/core/services/hamburger-menu.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html'
 
})
export class HamburgerComponent implements OnInit {

  isOpen: boolean;

  constructor(private hamburgerMenuService: HamburgerMenuService) { }

  ngOnInit(): void {
    this.isOpen = this.hamburgerMenuService.getOpenState();
  }

  toggleOpen() {
    this.isOpen = this.hamburgerMenuService.getOpenState();    
  }

}
