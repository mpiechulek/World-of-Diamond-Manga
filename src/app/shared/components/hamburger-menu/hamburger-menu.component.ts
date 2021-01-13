import { Component, Input, OnInit } from '@angular/core';
import { HamburgerMenuService } from 'src/app/core/services/hamburger-menu.service';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html'

})
export class HamburgerMenuComponent implements OnInit {

  @Input() isOpen: boolean = false;

  constructor(private hamburgerMenuService: HamburgerMenuService) { }

  ngOnInit(): void {
  }

}
