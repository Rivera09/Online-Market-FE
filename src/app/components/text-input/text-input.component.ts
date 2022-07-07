import { Component, OnInit, Input } from '@angular/core';
import { generate } from 'shortid';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() labelText = '';
  @Input() bottomAction: { text: string; action: () => void } | undefined;
  inputId = '';

  constructor() {}

  ngOnInit(): void {
    this.inputId = generate();
  }
}
