import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() label = '';
  @Input() placeholder = 'Select ...';
  @Input() options: [] = [];
  @Input() id = '';
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  value = '';

  onChange;

  constructor() { }

  ngOnInit(): void {
  }


  change(value: any): void {
    let data = {
      value: value,
      id: this.id
    }
    this.selected.emit(data);
  }

  clicked(e: Event): void {
    console.log(e);
  }

}
