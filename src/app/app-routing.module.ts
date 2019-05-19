import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';




const routes: Routes = [
  {path:"",component: NavbarComponent},
  {path:"",component:Section2Component  },
  {path:"",component:Section3Component },
  {path:"",component:Section4Component },
  { path:"", component:JumbotronComponent },
  {path:"",component:FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

