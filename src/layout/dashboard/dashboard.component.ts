import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  provider = [{ label: 'Select...', value: '' }];
  requestType = [{ label: 'Select...', value: '' }];
  insurance = [{ label: 'Select...', value: '' }];
  transaction = [{ label: 'Select...', value: '' }];
  constructor() { }

  ngOnInit(): void {
  }

}
