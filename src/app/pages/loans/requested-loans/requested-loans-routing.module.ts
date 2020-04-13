import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestedLoansPage } from './requested-loans.page';

const routes: Routes = [
  {
    path: '',
    component: RequestedLoansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestedLoansPageRoutingModule {}
