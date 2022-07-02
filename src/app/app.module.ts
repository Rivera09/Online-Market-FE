import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlanSelectionComponent } from './pages/plan-selection/plan-selection.component';
import { NavUserNoRegisterComponent } from './components/nav-user-no-register/nav-user-no-register.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, PlanSelectionComponent, NavUserNoRegisterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
