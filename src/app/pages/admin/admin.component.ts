import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES, WELCOME_IMAGES } from 'src/contants';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isRootUrl = true;
  welcomeImg = WELCOME_IMAGES.ADMIN;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isRootUrl = new RegExp(`^/${ROUTES.ADMIN.ROOT}$`).test(
        this.router.url
      );
    });
  }

  ngOnInit(): void {}
}
