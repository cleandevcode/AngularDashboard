import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-table',
  templateUrl: './claim-table.component.html',
  styleUrls: ['./claim-table.component.scss']
})


export class ClaimTableComponent implements OnInit {

  displayedColumns = ['client', 'provider', 'order', 'claim_status', 'processed_by', 'date', 'subtotal', 'covered', 'total'];

  dataSource = [
    {
      client: {
        name: "Joe Jonas", ID: '10-3290-08', avatar: '../../assets/images/a1.svg'
      },
      provider: 'ABC Insurance',
      order: 7,
      claim_status: "Success",
      processed_by: {
        name: "Sandra Joes",
        email: 'sandra@live.com'
      },
      date: '23/02/21 3:32 PM',
      subtotal: 100,
      covered: 18,
      total: 118
    },
    {
      client: {
        name: "Joe Jonas", ID: '10-3290-08', avatar: '../../assets/images/a2.svg'
      },
      provider: 'ABC Insurance',
      order: 7,
      claim_status: "Failed",
      processed_by: {
        name: "Sandra Joes",
        email: 'sandra@live.com'
      },
      date: '23/02/21 3:32 PM',
      subtotal: 100,
      covered: 18,
      total: 118
    },
    {
      client: {
        name: "Joe Jonas", ID: '10-3290-08', avatar: '../../assets/images/a3.svg'
      },
      provider: 'ABC Insurance',
      order: 7,
      claim_status: "Success",
      processed_by: {
        name: "Sandra Joes",
        email: 'sandra@live.com'
      },
      date: '23/02/21 3:32 PM',
      subtotal: 100,
      covered: 18,
      total: 118
    },
    {
      client: {
        name: "Joe Jonas", ID: '10-3290-08', avatar: '../../assets/images/a4.svg'
      },
      provider: 'ABC Insurance',
      order: 7,
      claim_status: "Failed",
      processed_by: {
        name: "Sandra Joes",
        email: 'sandra@live.com'
      },
      date: '23/02/21 3:32 PM',
      subtotal: 100,
      covered: 18,
      total: 118
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}

