import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-ui',
  templateUrl: './home.component.html'  
})
export class HomeComponent implements OnInit {

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
