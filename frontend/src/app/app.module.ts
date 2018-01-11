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
import { SosuriComponent } from './sosuri/sosuri.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { SalateComponent } from './salate/salate.component';
import { PizzaComponent } from './pizza/pizza.component';
import { DeserturiComponent } from './deserturi/deserturi.component';
import { ComentariuComponent } from './comentariu/comentariu.component';
import { BauturiComponent } from './bauturi/bauturi.component';
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
