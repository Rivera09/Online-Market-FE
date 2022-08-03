import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TUserRoles } from 'contants';
import { API_ROUTES } from 'contants';

import { post } from 'utils/serviceRequests';

type TLoginResponse = {
  token: string;
  role: TUserRoles;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(body: { email: string; password: string }) {
    return post<TLoginResponse>(this.http, API_ROUTES.LOGIN, body);
  }
}
