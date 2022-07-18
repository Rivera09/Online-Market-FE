import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-switch-input',
  templateUrl: './switch-input.component.html',
  styleUrls: ['./switch-input.component.scss'],
})
export class SwitchInputComponent implements OnInit {
  @Input() inputId: string = '';
  @Input() name: string = '';
  @Input() change: ((e: any) => void) | undefined;

  constructor() {}

  ngOnInit(): void {}
}
