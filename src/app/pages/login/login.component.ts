import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'contants';
import { AuthService } from 'app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

import { setData } from 'utils/storage';
import { TUserRoles } from 'contants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  loginUrl: Record<TUserRoles, string> = {
    admin: `/${ROUTES.ADMIN.ROOT}`,
    customer: `/${ROUTES.CUSTOMER.ROOT}`,
  };
  user = '';

  recoverPasswordBtnData = {
    text: '¿Olvidaste tu contraseña?',
    action: () => {
      this.router.navigate([`/${ROUTES.RECOVER_PASSWORD.ROOT}`]);
    },
  };

  login = () => {
    const { email, password } = this.loginForm.value;
    if (!email || !password) return;
    this.authService.login({ email, password }).subscribe({
      next: (data) => {
        const role = data.data.role;
        setData('token', data.data.token);
        this.router.navigate([this.loginUrl[role]]);
      },
      error: (err) => {
        // TODO: implementar un modal o toast para mostrar errores del backend
        console.log('error', err);
      },
    });
  };

  ngOnInit(): void {}
}
