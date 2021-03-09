import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() id = '';
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
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
