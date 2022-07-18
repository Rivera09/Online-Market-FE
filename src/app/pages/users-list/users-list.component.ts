import { Component, OnInit } from '@angular/core';
import { DEFAULT_USER_IMG, TUser, ROUTES } from 'contants';

const mockedUsersList: TUser[] = [
  { id: 1, name: 'user 1', type: 'admin' },
  { id: 2, name: 'user 2', type: 'admin' },
  { id: 2, name: 'user 2', type: 'admin' },
  { id: 2, name: 'user 2', type: 'admin' },
];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  defaultImg = DEFAULT_USER_IMG;
  usersList = mockedUsersList;
  createUserUrl = ROUTES.ADMIN.CREATE_USER;

  constructor() {}

  ngOnInit(): void {}
}
