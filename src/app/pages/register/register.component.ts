import { Component, OnInit } from '@angular/core';
import { ROUTES } from 'contants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  showCompanyNameInput = false;
  registerUrl = `/${ROUTES.PLANSELECTION.ROOT}`;

  handleChange = (val: any) => {
    console.log(val);
  };

  ngOnInit(): void {}
}
