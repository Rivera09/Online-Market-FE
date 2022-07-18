import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() inputId: string = '';
  @Input() name: string = '';
  @Output() inputData = new EventEmitter<{ name: string; value: string }>();

  onType(e: Event) {
    console.log('typing');
    const target = e.target as HTMLInputElement;
    this.inputData.emit({ name: this.name, value: target.value });
  }

  constructor() {}

  ngOnInit(): void {}
}
