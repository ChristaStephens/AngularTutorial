import { Injectable } from '@angular/core';
//may just be httpclient by itself!
import { HttpClientModule, HttpClient} from '@angular/common/http';

//place the import where you want to see it
//then create a dependency injection
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  // firstClick(){
  //   return console.log('clicked');
  // }

  // fake endpoints for testing
  getUsers(){
    return this.http.get('https://reqres.in/api/users')
  }

}
