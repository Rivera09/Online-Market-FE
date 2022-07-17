import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RECOVER_PASSWORD } from 'contants';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  image = '';
  mode = false;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.image=RECOVER_PASSWORD
    if(this.rutaActiva.snapshot.params['mode']=="1"){
      this.mode = true;
    }
  }

}
