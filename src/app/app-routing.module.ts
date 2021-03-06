import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'contants';
import { pagesObj } from '@pages';

const {
  AdminComponent,
  CustomerComponent,
  HomeComponent,
  LoginComponent,
  PlanSelectionComponent,
  RecoverPasswordComponent,
  RegisterComponent,
  ShoppingCartComponent,
  ShoppingHistoryComponent,
  TemplateAdminComponent,
  UsersListComponent,
  CreateUserComponent,
} = pagesObj;

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
    children: [
      { path: ROUTES.ADMIN.TEMPLATE, component: TemplateAdminComponent },
      { path: ROUTES.ADMIN.USERS, component: UsersListComponent },
      {
        path: `${ROUTES.ADMIN.USERS}/${ROUTES.ADMIN.CREATE_USER}`,
        component: CreateUserComponent,
      },
    ],
  },
  {
    path: ROUTES.CUSTOMER.ROOT,
    component: CustomerComponent,
    children: [
      { path: ROUTES.CUSTOMER.SHOPPING, component: ShoppingCartComponent },
      { path: ROUTES.CUSTOMER.HISTORY, component: ShoppingHistoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
