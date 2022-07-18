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
  user = '';

  recoverPasswordBtnData = {
    text: '¿Olvidaste tu contraseña?',
    action: () => {
      this.router.navigate([`/${ROUTES.RECOVER_PASSWORD.ROOT}`]);
    },
  };

  login() {}

  re({ name, value }: { name: string; value: string }) {
    console.log(value);
    this.user = value;

    this.login = () => {
      console.log(this.user);
      if (this.user === 'admin') this.router.navigate([this.loginUrl]);
      else if (this.user === 'customer')
        this.router.navigate([`/${ROUTES.CUSTOMER.ROOT}`]);
    };
  }

  ngOnInit(): void {}
}
