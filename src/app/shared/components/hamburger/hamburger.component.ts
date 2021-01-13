import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HamburgerMenuService } from 'src/app/core/services/hamburger-menu.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html'
 
})
export class HamburgerComponent implements OnInit {

  isOpen: boolean;
  isOpenSubscription: Subscription;

  constructor(private hamburgerMenuService: HamburgerMenuService) { }

  ngOnInit(): void {
    this.isOpenSubscription = this.hamburgerMenuService.getOpenState().subscribe((isOpen) => {
      this.isOpen = isOpen;
      console.log(isOpen);      
    });
  }

  ngOnDestroy(): void {
    this.isOpenSubscription.unsubscribe();
  }

  toggleOpen() {
    this.hamburgerMenuService.getChangeOpenState();
  }

}
