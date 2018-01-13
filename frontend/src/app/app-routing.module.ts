import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserComponent } from './components';
import { SosuriComponent } from './components/pages/sosuri/sosuri.component';
import { SandwichComponent } from './components/pages/sandwich/sandwich.component';
import { SalateComponent } from './components/pages/salate/salate.component';
import { PizzaComponent } from './components/pages/pizza/pizza.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'sosuri', component: SosuriComponent
  },
  {
    path: 'sandwich', component: SandwichComponent
  },
  {
    path: 'salate', component: SalateComponent
  },
  {
    path: 'pizza', component: PizzaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }