import { Component, OnInit, Input } from '@angular/core';
import { AUTH_IMAGES } from 'src/contants';
import {
  faFacebookF,
  faGoogle,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login-register-form-layout',
  templateUrl: './login-register-form-layout.component.html',
  styleUrls: ['./login-register-form-layout.component.scss'],
})
export class LoginRegisterFormLayoutComponent implements OnInit {
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

  recoverPasswordBtnData = {
    text: '¿Olvidaste tu contraseña?',
    action: () => {
      console.log('recover');
    },
  };

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
