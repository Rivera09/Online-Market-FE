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
  @Input() activeDir: string = '';
  title: string = titles[this.role];
  options = SIDEBAR_OPTIONS.filter((option) =>
    option.roles.includes(this.role)
  );

  constructor() {}
  ngOnInit(): void {}
}
