import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  PlanSelectionComponent,
} from './pages';
import {
  ButtonComponent,
  FormInputComponent,
  SwitchInputComponent,
  TextInputComponent,
  NavUserNoRegisterComponent,
} from './components/';
import { AppComponent } from './app.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { LoginRegisterFormLayoutComponent } from './layouts/login-register-form-layout/login-register-form-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplateAdminComponent } from './pages/template-admin/template-admin.component';
import { ColumsTempladeComponent } from './components/colums-templade/colums-templade.component';

@NgModule({
  declarations: [
    RecoverPasswordComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    ButtonComponent,
    PlanSelectionComponent,
    NavUserNoRegisterComponent,
    LoginRegisterFormLayoutComponent,
    TextInputComponent,
    RegisterComponent,
    SwitchInputComponent,
    FormInputComponent,
    TemplateAdminComponent,
    ColumsTempladeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
