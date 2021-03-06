import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Input() label = '';

  value = ''
  constructor() { }

  ngOnInit(): void {
  }

  change(value: string): void {
    console.log(value)
  }

}
