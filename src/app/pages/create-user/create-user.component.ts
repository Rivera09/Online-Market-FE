import { Component, OnInit } from '@angular/core';
import { dataSelect,CREATE_USER } from 'src/contants';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  
  dataBusiness:dataSelect[]=[
    {
      option:"Americana",
      value:"1"
    },
    {
      option:"Europea",
      value:"2"
    },
    {
      option:"Centroamericana",
      value:"3"
    }
  ]

  dataUserType:dataSelect[]=[
    {
      option:"Sobrecargo",
      value:"1"
    },
    {
      option:"Gerente",
      value:"2"
    },
    {
      option:"Oficinista",
      value:"3"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
