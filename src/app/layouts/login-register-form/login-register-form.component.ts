import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_IMAGES, ROUTES } from 'contants';
import {
  faFacebookF,
  faGoogle,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login-register-form',
  templateUrl: './login-register-form.component.html',
  styleUrls: ['./login-register-form.component.scss'],
})
export class LoginRegisterFormComponent implements OnInit {
  @Input() type: 'login' | 'register' = 'login';

  facebookIcon = faFacebookF;
  googleIcon = faGoogle;
  linkedinIcon = faLinkedin;

  image = '';
  redirectTo = '';
  sidebarBtnText = '';
  sidebarTitle = '';
  title = '';
  actionBtnText = '';

  constructor() {}

  ngOnInit(): void {
    const isLogin = this.type === 'login';
    this.image = isLogin ? AUTH_IMAGES.LOGIN : AUTH_IMAGES.REGISTER;
    this.redirectTo = `/${isLogin ? 'register' : 'login'}`;
    this.sidebarBtnText = isLogin ? 'Registrate' : 'Inicia sesión';
    this.sidebarTitle = isLogin ? '¿Nuevo aquí?' : 'Crea tu cuenta';
    this.title = isLogin ? 'Inicia sesión' : 'Crea tu cuenta';
    this.actionBtnText = isLogin ? 'Iniciar sesión' : 'Crear cuenta';
  }
}
