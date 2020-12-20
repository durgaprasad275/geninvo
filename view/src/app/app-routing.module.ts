import { StoreComponent } from './store/store.component';
import { AddComponent } from './store/add/add.component';
import { SearchComponent } from './store/search/search.component';

import { AuthGuard } from './service/auth.gaurd';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'store', component: StoreComponent,
    children:[
      {path:'',component:SearchComponent,canActivate: [AuthGuard]},
      {path:'search',component:SearchComponent,canActivate: [AuthGuard]},
      {path:'add',component:AddComponent,canActivate: [AuthGuard]}
    ]},
    { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
