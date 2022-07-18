import { Component, OnInit } from '@angular/core';
import { dataSelect, ROUTES } from 'contants';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  dataBusiness: dataSelect[] = [
    {
      option: 'Americana',
      value: '1',
    },
    {
      option: 'Europea',
      value: '2',
    },
    {
      option: 'Centroamericana',
      value: '3',
    },
  ];

  dataUserType: dataSelect[] = [
    {
      option: 'Cliente',
      value: '1',
    },
    {
      option: 'Empresa',
      value: '2',
    },
    {
      option: 'Administrador',
      value: '3',
    },
  ];

  usersListUrl = `/${ROUTES.ADMIN.ROOT}/${ROUTES.ADMIN.USERS}`;

  constructor() {}

  ngOnInit(): void {}

  ru: string = '0';
  rb: string = '0';

  createUser() {
    console.log('create');
  }

  receiveUserType(event: any) {
    this.ru = event;
  }

  receiveBusiness(event: any) {
    this.rb = event;
  }
}
