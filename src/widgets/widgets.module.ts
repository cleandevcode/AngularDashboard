import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TopSearchInputComponent } from "./top-search-input/top-search-input.component"
import { ClaimTableComponent } from "./claim-table/claim-table.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { InputComponent } from "./input/input.component";

import { DemoMaterialModule } from "./material-module";

@NgModule({
    declarations: [
        SidebarComponent,
        TopSearchInputComponent,
        ClaimTableComponent,
        DatepickerComponent,
        DropdownComponent,
        InputComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DemoMaterialModule
    ],
    exports: [
        RouterModule,
        SidebarComponent,
        TopSearchInputComponent,
        ClaimTableComponent,
        DatepickerComponent,
        DropdownComponent,
        InputComponent,
    ],
})
export class WidgetsModule { }