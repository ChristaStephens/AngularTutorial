import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

//where you define the routes of the page
//within the array. Path is where they are
//in the browser. We need to import the componenets
//that we want to use for the routes
const routes: Routes = [
{path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
