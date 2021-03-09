import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from "./dashboard.component";
import { DashboardService } from './dashboard.service';
import { WidgetsModule } from "../../widgets/widgets.module";

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, RouterModule, WidgetsModule, HttpClientModule],
    exports: [DashboardComponent],
    providers: [DashboardService]
})

export class DashboardModule { }