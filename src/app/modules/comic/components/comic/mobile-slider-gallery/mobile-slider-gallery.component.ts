import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-slider-gallery',
  templateUrl: './mobile-slider-gallery.component.html'
})
export class MobileSliderGalleryComponent implements OnInit {

  @Input() mobileSliderVisibiolity;

  constructor() { }

  ngOnInit(): void {
  }

}
