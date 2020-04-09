import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanTypeShortPage } from './loan-type-short.page';

const routes: Routes = [
  {
    path: '',
    component: LoanTypeShortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanTypeShortPageRoutingModule {}
