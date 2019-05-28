import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // when the page loads it won't attach the gray class
  h1Style: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  //"this" refers to the h1Style initiated above
  firstClick(){
    this.h1Style = true;
  }

}
