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
  // h1Style: boolean = false;

  // storing the returned data from the "get users"
  //service/api as an object

  users:Object;



  //injection of the data service
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users =data
      console.log(this.users)
    })
  }
  //"this" refers to the h1Style initiated above
  //helps for communicating with backing, retrieving data
  // firstClick(){
  //   this.data.firstClick();
  // }


}
