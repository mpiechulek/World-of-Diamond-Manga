import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HamburgerMenuService } from 'src/app/core/services/hamburger-menu.service';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html'

})
export class HamburgerMenuComponent implements OnInit, OnDestroy {

  isOpen: boolean;
  isOpenSubscription: Subscription;

  constructor(private hamburgerMenuService: HamburgerMenuService) {

  }

  ngOnInit(): void {
    this.isOpenSubscription = this.hamburgerMenuService.getOpenState().subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  ngOnDestroy(): void {
    this.isOpenSubscription.unsubscribe();
  }

  onChangeVisibility() {
    this.hamburgerMenuService.getOpenState();
  }

}
