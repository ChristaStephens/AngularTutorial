import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

//you import the data file inside the ts file where you
//want to see it/use it
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // when the page loads it won't attach the gray class
  h1Style: boolean = false;

  //injection of the data service
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  //"this" refers to the h1Style initiated above
  firstClick(){
    this.data.firstClick();
  }

}
