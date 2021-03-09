import { Component, OnChanges, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-table',
  templateUrl: './claim-table.component.html',
  styleUrls: ['./claim-table.component.scss']
})


export class ClaimTableComponent implements OnInit, OnChanges {

  displayedColumns = ['client', 'provider', 'order', 'claim_status', 'processed_by', 'date', 'subtotal', 'covered', 'total'];

  @Input() dataSource: [] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.dataSource && changes.dataSource.dataSource) {
      this.dataSource = changes.dataSource.dataSource.currentValue
    }
  }


}

