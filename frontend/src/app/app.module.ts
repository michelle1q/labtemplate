// CORE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// UI
import { SuiModule } from 'ng2-semantic-ui';

// Services
import { ApiService } from './service';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components';

// used to create fake backend
import { fakeBackendProvider } from './service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { UserComponent } from './components/pages/user/user.component';
import { DataTableModule } from 'primeng/primeng';
import {ContextMenuModule }from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { SosuriComponent } from './components/pages/sosuri/sosuri.component';
import { SandwichComponent } from './components/pages/sandwich/sandwich.component';
import { SalateComponent } from './components/pages/salate/salate.component';
import { PizzaComponent } from './components/pages/pizza/pizza.component';
import { DeserturiComponent } from './components/pages/deserturi/deserturi.component';
import { ComentariuComponent } from './components/pages/comentariu/comentariu.component';
import { BauturiComponent } from './components/pages/bauturi/bauturi.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    SosuriComponent,
    SandwichComponent,
    SalateComponent,
    PizzaComponent,
    DeserturiComponent,
    ComentariuComponent,
    BauturiComponent
  ],
  imports: [
    DialogModule,
    ContextMenuModule ,
      DataTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SuiModule,
  ],
  providers: [
    AppRoutingModule,
    ApiService,
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
