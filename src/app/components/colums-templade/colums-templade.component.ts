import { Component, OnInit, Input } from '@angular/core';

type btnClassNames = 'col-1' | 'col-2' | 'col-3' | 'col-4' | 
                     'col-5' | 'col-6'| 'col-7' | 'col-8' | 
                     'col-9' | 'col-10' | 'col-11' | 'col-12';

@Component({
  selector: 'app-colums-templade',
  templateUrl: './colums-templade.component.html',
  styleUrls: ['./colums-templade.component.scss']
})
export class ColumsTempladeComponent implements OnInit {

  @Input() columns: '1' | '2' | '3' | '4' | 
                    '5' | '6' | '7' | '8' | 
                    '9' | '10' | '11' | '12' = '1';
  
  classNames: Record<btnClassNames, boolean> = {
    'col-1': false, 'col-2': false, 'col-3': false,
    'col-4': false, 'col-5': false, 'col-6': false,
    'col-7': false, 'col-8': false, 'col-9': false,
    'col-10': false, 'col-11': false, 'col-12': false,
  };
  
  textColumn:string;

  constructor() { 
    this.textColumn = `col-${this.columns}`
  }

  ngOnInit(): void {
    this.classNames = {
      ...this.classNames,
      [`col-${this.columns}`]: true,
    };
  }

}
