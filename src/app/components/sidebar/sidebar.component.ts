import { Component, OnInit } from '@angular/core';
// import { SIDEBAR_OPTIONS } from 'src/contants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}
  /**
   * Una vez conectado con la API,
   * se debe filtrar con el role del usuario
   */
  // options = SIDEBAR_OPTIONS.filter((option) => option.roles.includes('admin'));

  ngOnInit(): void {}
}
