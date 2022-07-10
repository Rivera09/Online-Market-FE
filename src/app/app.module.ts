import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent, LoginComponent, RegisterComponent } from './pages';
import {
  ButtonComponent,
  FormInputComponent,
  SwitchInputComponent,
  TextInputComponent,
} from './components/';
import { AppComponent } from './app.component';
import { LoginRegisterFormComponent } from './layouts/login-register-form/login-register-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ButtonComponent,
    LoginRegisterFormComponent,
    TextInputComponent,
    RegisterComponent,
    SwitchInputComponent,
    FormInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
