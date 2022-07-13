import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  AdminComponent,
  PlanSelectionComponent,
} from './pages';

import { LoginRegisterLayout, MainLayout } from './layouts';

import {
  ButtonComponent,
  FormInputComponent,
  SwitchInputComponent,
  TextInputComponent,
  SidebarComponent,
  NavUserNoRegisterComponent,
} from './components/';
import { AppComponent } from './app.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarBtnComponent } from './components/sidebar-btn/sidebar-btn.component';

@NgModule({
  declarations: [
    RecoverPasswordComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    ButtonComponent,
    LoginRegisterLayout,
    PlanSelectionComponent,
    NavUserNoRegisterComponent,
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
