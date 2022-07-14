import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/contants';
import {
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  AdminComponent,
  PlanSelectionComponent,
  RecoverPasswordComponent,
  CustomerComponent,
  ShoppingCartComponent
} from './pages';

const routes: Routes = [
  {
    path: ROUTES.HOME.ROOT,
    component: HomeComponent,
  },
  { path: ROUTES.LOGIN.ROOT, component: LoginComponent },
  {
    path: ROUTES.RECOVER_PASSWORD.ROOT,
    component: RecoverPasswordComponent,
  },
  { path: ROUTES.PLANSELECTION.ROOT, component: PlanSelectionComponent },
  { path: ROUTES.REGISTER.ROOT, component: RegisterComponent },
  {
    path: ROUTES.ADMIN.ROOT,
    component: AdminComponent,
    // Cambiar Login component por la páina de usuarios
    children: [{ path: ROUTES.ADMIN.USERS, component: LoginComponent }],
  },
  {
    path: ROUTES.CUSTOMER.ROOT,
    component: CustomerComponent,
    children: [{ path: ROUTES.CUSTOMER.SHOPPING, component: ShoppingCartComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
