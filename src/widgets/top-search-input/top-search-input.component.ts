import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-top-search-input',
  templateUrl: './top-search-input.component.html',
  styleUrls: ['./top-search-input.component.css']
})
export class TopSearchInputComponent implements OnInit {

  form: FormGroup = this.fb.group({
    search: ''
  });

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
  }

}
