import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//where you define the routes of the page
//within the array. Path is where they are
//in the browser. We need to import the componenets
//that we want to use for the routes
//'' gives url parameters, home is index
//so it doesn't need to say 'Home'
//path name has to match name in TS file (lowercase)
