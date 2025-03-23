import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"login", component: LoginComponent},
    {path:"signIn", component: SigninComponent},
    {path:"userpage/:id",component: DashboardComponent}
];
