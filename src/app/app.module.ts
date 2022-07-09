import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent, LoginComponent } from './pages';
import { ButtonComponent } from './components/';
import { AppComponent } from './app.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { LoginRegisterFormLayoutComponent } from './layouts/login-register-form-layout/login-register-form-layout.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    LoginComponent, 
    ButtonComponent, 
    LoginRegisterFormLayoutComponent, 
    TextInputComponent, 
    RecoverPasswordComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
