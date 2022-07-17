import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { dataSelect } from 'contants';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {
  @Input() inputId: string = '';
  @Input() name: string = '';
  @Input() data: dataSelect[]=[]
  @Output() itemSelect = new EventEmitter<string>();
  
  content={
    id:"0"
  }

  changeSelect(){
    this.itemSelect.emit( this.content.id )
  }
  constructor() { }

  ngOnInit(): void {
  }

}
