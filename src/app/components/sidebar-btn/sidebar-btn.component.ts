import { Component, OnInit, Input } from '@angular/core';
import { SIDEBAR_OPTIONS } from 'contants';

@Component({
  selector: 'app-sidebar-btn',
  templateUrl: './sidebar-btn.component.html',
  styleUrls: ['./sidebar-btn.component.scss'],
})
export class SidebarBtnComponent implements OnInit {
  @Input() optionItem: typeof SIDEBAR_OPTIONS[number] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
