import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/contants';
import {
  HomeComponent,
  LoginComponent,
  PlanSelectionComponent,
  RegisterComponent,
} from './pages';

const routes: Routes = [
  {
    path: ROUTES.HOME.ROOT,
    component: HomeComponent,
  },
  { path: ROUTES.LOGIN.ROOT, component: LoginComponent },
  { path: ROUTES.PLANSELECTION.ROOT, component: PlanSelectionComponent },
  { path: ROUTES.REGISTER.ROOT, component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
