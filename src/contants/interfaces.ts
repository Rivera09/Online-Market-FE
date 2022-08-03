import { USER_ROLES } from './';

export type TUserRoles = typeof USER_ROLES[keyof typeof USER_ROLES];

export type TSidebarOption = {
  id: number;
  label: string;
  route: string;
  icon: string;
  roles: TUserRoles[];
};

export type TUser = {
  id: number;
  name: string;
  type: TUserRoles;
  company?: string;
  picture?: string;
};
export interface shopping {
  nameProduct: string;
  price: string;
  idProduct: number;
  amount: number;
  imageRute: string;
  date: string;
}

export interface dataSelect {
  value: string;
  option: string;
}

export type THttpResponse<T> = {
  data: T;
};
