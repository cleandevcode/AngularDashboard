import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {
    configUrl = 'https://chenghe-test.herokuapp.com/api/orders/';
    constructor(private http: HttpClient) {
    }

    getValue(value) {
        console.log("value->", value);
    }

    generateClaim(params): Observable<any> {
        console.log("params->", params)
        return this.http.get(this.configUrl, { params: params })
    }
}