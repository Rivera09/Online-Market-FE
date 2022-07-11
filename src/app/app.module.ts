import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  AdminComponent,
} from './pages';
import { LoginRegisterLayout, MainLayout } from './layouts';
import {
  ButtonComponent,
  FormInputComponent,
  SwitchInputComponent,
  TextInputComponent,
  SidebarComponent,
} from './components/';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarBtnComponent } from './components/sidebar-btn/sidebar-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ButtonComponent,
    LoginRegisterLayout,
    TextInputComponent,
    RegisterComponent,
    SwitchInputComponent,
    FormInputComponent,
    MainLayout,
    AdminComponent,
    SidebarComponent,
    SidebarBtnComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
