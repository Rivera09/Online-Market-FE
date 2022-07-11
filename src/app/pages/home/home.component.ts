import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../../contants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loginRoute = ROUTES.LOGIN.ROOT;
  registerRoute = ROUTES.REGISTER.ROOT;

  constructor() {}

  ngOnInit(): void {}
}
