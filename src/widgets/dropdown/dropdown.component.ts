import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() label = '';
  @Input() placeholder = 'Select ...';
  @Input() options: [] = [];

  value = '';

  constructor() { }

  ngOnInit(): void {
  }


  change(value: any): void {
    console.log(value)
  }

  clicked(e: Event): void {
    console.log(e);
  }

}
