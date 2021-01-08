import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";

const routes: Routes = [
  //path = URL string, component = Component
  { path: 'heroes', component: HeroesComponent }
];

//initialize router
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
