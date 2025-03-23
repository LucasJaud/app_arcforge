import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; 
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import {HeaderComponent} from './components/header/header.component';
import {SigninComponent} from './components/signin/signin.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SigninComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClient,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
