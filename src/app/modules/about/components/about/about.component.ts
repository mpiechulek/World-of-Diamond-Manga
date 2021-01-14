import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-ui',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.isLoading = false;
    }, 10)
  }

}
