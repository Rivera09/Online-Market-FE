import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../../contants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loginPath = ROUTES.LOGIN.ROOT;

  constructor() {}

  ngOnInit(): void {}
}
