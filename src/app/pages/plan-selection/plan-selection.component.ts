import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html',
  styleUrls: ['./plan-selection.component.scss']
})
export class PlanSelectionComponent implements OnInit {

  plan = {
    name : "Lite",
    icon: "eco",
    slogan: "Perfecto para comenzar",
    type: "Gratis",
    include:[
      {
        icon:"group",
        content:"Crea hasta 5 Usuarios"
      },
      {
        icon:"archive",
        content:"Ten 500 Mb de uso"
      },
      {
        icon:"article",
        content:"Crea hasta 2 paginas"
      },
      {
        icon:"shopping_bag",
        content:"Adiciona 30 productos"
      }
    ]

  }

  plans = [
    this.plan,
    this.plan,
    this.plan
  ]
  constructor() { }

  ngOnInit(): void {
  }

}