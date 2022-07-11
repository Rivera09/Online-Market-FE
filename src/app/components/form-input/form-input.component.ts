import { Component, OnInit, Input } from '@angular/core';
import { generate } from 'shortid';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input() type: 'text' | 'switch' = 'text';
  @Input() labelText = '';
  @Input() name: string = '';
  @Input() bottomAction: { text: string; action: () => void } | undefined;

  inputId = '';

  constructor() {}

  ngOnInit(): void {
    this.inputId = generate();
  }
}
