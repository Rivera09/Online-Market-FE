import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'contants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  loginUrl = `/${ROUTES.ADMIN.ROOT}`;

  recoverPasswordBtnData = {
    text: '¿Olvidaste tu contraseña?',
    action: () => {
      this.router.navigate([`/${ROUTES.RECOVER_PASSWORD.ROOT}`]);
    },
  };

  ngOnInit(): void {}
}
