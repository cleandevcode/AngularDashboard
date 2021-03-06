import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard.component";

import { WidgetsModule } from "../../widgets/widgets.module";

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, RouterModule, WidgetsModule],
    exports: [DashboardComponent]
})

export class DashboardModule { }