import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from '../layout/dashboard/dashboard.component';;
import { ClaimsComponent } from "../layout/claims/claims.component";
import { LogsComponent } from "../layout/logs/logs.component";
import { UsersComponent } from "../layout/users/users.component";
import { MoreComponent } from "../layout/more/more.component";

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'claims', component: ClaimsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'logs', component: LogsComponent },
    { path: 'more', component: MoreComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}