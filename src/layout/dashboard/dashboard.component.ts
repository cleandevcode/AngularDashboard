import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  providerOpt = [{ label: 'Provider 1', value: 'Provider 1' }, { label: 'Provider 2', value: 'Provider 2' }, { label: 'Provider 3', value: 'Provider 3' }];
  requestTypeOpt = [{ label: 'Select...', value: '' }];
  insuranceOpt = [{ label: 'Select...', value: '' }];
  transactionOpt = [{ label: 'Success', value: 'Success' }, { label: 'Failed', value: 'Failed' }];


  provider = null;
  status = null;
  startDate = null;
  endDate = null;
  lastName = null;

  tableData = [];
  result_temp;
  request_Temp = [];
  request = new HttpParams();

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
  }

  async generate() {

    this.result_temp = [];
    this.tableData = [];

    var params = new HttpParams();

    if (this.provider) {
      params = params.append('provider', this.provider)
    }

    if (this.status) {
      params = params.append('status', this.status)
    }

    if (this.startDate) {
      params = params.append('startDate', this.startDate)
    }

    if (this.endDate) {
      params = params.append('endDate', this.endDate)
    }

    if (this.lastName) {
      params = params.append('lastName', this.lastName)
    }

    this.result_temp = await this.service.generateClaim(params).toPromise();

    this.result_temp.map(item => {
      this.tableData.push({
        "client": {
          ID: item.id,
          name: item.firstname + " " + item.lastname,
          avatar: item.avatar
        },
        "provider": item.provider,
        "order": item.order,
        "claim_status": item.claim_status,
        "processed_by": {
          "name": item.processor_name,
          "email": item.processor_email
        },
        "date": item.date,
        "subtotal": item.subtotal,
        "covered": item.covered,
        "total": item.total
      })
    });

  }

  getValue($event) {
    switch ($event.id) {
      case "provider":
        this.provider = $event.value;
        break;
      case "status":
        this.status = $event.value;
        break;
      case "lastName":
        this.lastName = $event.value;
        break;
      case "startDate":
        this.startDate = $event.value;
        break;
      case "endDate":
        this.endDate = $event.value;
        break;
      default:
        break;
    }
  }

}
