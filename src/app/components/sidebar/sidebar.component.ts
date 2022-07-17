import { Component, OnInit, Input } from '@angular/core';
import { SIDEBAR_OPTIONS, TUserRoles, TSidebarOption } from 'contants';

const titles: Record<TUserRoles, string> = {
  admin: 'Admin',
  customer: 'Customer',
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() role: TUserRoles = 'admin';
  title: string = '';

  constructor() {}
  /**
   * Una vez conectado con la API,
   * se debe filtrar con el role del usuario
   */
  options: TSidebarOption[] | undefined;

  ngOnInit(): void {
    this.options = SIDEBAR_OPTIONS.filter((option) =>
      option.roles.includes(this.role)
    );
  }
}
