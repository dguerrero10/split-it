import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoansPersonIdPage } from './loans-person-id.page';

const routes: Routes = [
  {
    path: '',
    component: LoansPersonIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansPersonIdPageRoutingModule {}
