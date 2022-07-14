import { Component, OnInit, Input } from '@angular/core';
import { SIDEBAR_OPTIONS, USER_ROLES } from 'src/contants';

type TUserRoles = keyof typeof USER_ROLES;

const titles: Record<TUserRoles, string> = {
  ADMIN: 'Admin',
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() role: TUserRoles = 'ADMIN';
  title = titles[this.role];

  constructor() {}
  /**
   * Una vez conectado con la API,
   * se debe filtrar con el role del usuario
   */
  options = SIDEBAR_OPTIONS.filter((option) =>
    option.roles.includes(USER_ROLES[this.role])
  );

  ngOnInit(): void {}
}
