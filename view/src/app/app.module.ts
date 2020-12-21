import { StoreService } from './service/store.service';
import { AuthGuard } from './service/auth.gaurd';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './store/search/search.component';
import { AddComponent } from './store//add/add.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { StoreComponent } from './store/store.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    AddComponent,
    RegisterComponent,
    MenuComponent,
    ErrorComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
