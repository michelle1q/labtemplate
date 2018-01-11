import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserComponent } from './components';
import { SosuriComponent } from './components/pages/sosuri/sosuri.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }