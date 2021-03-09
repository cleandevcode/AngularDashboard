import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Input() label = '';
  @Input() id = '';
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
  value = ''
  constructor() { }

  ngOnInit(): void {
  }

  change(value: string): void {
    let data = {
      value: value,
      id: this.id
    }
    this.selected.emit(data);
  }

}
