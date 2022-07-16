import { Component, OnInit, Input } from '@angular/core';
import { dataSelect } from 'src/contants';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {
  @Input() inputId: string = '';
  @Input() name: string = '';
  @Input() data: dataSelect[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
