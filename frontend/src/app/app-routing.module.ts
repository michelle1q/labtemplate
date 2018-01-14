import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserComponent } from './components';
import { SosuriComponent } from './components/pages/sosuri/sosuri.component';
import { SandwichComponent } from './components/pages/sandwich/sandwich.component';
import { SalateComponent } from './components/pages/salate/salate.component';
import { PizzaComponent } from './components/pages/pizza/pizza.component';
import { DeserturiComponent } from './components/pages/deserturi/deserturi.component';
import { ComentariuComponent } from './components/pages/comentariu/comentariu.component';
import { BauturiComponent } from './components/pages/bauturi/bauturi.component';
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
  },
  {
    path: 'deserturi', component: DeserturiComponent
  },
  {
    path: 'comentariu', component: ComentariuComponent
  },
  {
    path: 'bauturi', component: BauturiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }