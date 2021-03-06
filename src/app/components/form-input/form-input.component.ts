import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { generate } from 'shortid';
import { dataSelect } from 'contants';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input() type: 'text' | 'switch' | 'select' = 'text';
  @Input() data: dataSelect[] = [];
  @Input() labelText = '';
  @Input() name: string = '';
  @Input() bottomAction: { text: string; action: () => void } | undefined;
  @Output() itemSelect = new EventEmitter<string>();
  @Output() inputValueChange = new EventEmitter<{
    name: string;
    value: string;
  }>();

  inputId = '';

  dataEmitter(event: string) {
    this.itemSelect.emit(event);
  }

  receiveInputData($event: any) {
    this.inputValueChange.emit($event);
  }

  constructor() {}

  ngOnInit(): void {
    this.inputId = generate();
  }
}
