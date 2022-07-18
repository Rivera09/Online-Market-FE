import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES, WELCOME_IMAGES } from 'contants';
import { getSubDir } from 'utils/routes';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  isRootUrl = true;
  welcomeImg = WELCOME_IMAGES.ADMIN;
  currentSubDir = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isRootUrl = new RegExp(`^/${ROUTES.CUSTOMER.ROOT}$`).test(
        this.router.url
      );
      this.currentSubDir = getSubDir(this.router.url, ROUTES.CUSTOMER.ROOT);
    });
  }
  ngOnInit(): void {}
}
