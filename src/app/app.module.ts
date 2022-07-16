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
import { TemplateAdminComponent } from './pages/template-admin/template-admin.component';
import { SidebarBtnComponent } from './components/sidebar-btn/sidebar-btn.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CardShoppingComponent } from './components/card-shopping/card-shopping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { SelectInputComponent } from './components/select-input/select-input.component';

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
    TemplateAdminComponent,
    MainLayout,
    AdminComponent,
    SidebarComponent,
    SidebarBtnComponent,
    CustomerComponent,
    ShoppingCartComponent,
    CardShoppingComponent,
    CreateUserComponent,
    SelectInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule,FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
