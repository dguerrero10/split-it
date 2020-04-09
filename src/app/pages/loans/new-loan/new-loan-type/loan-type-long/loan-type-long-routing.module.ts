import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanTypeLongPage } from './loan-type-long.page';

const routes: Routes = [
  {
    path: '',
    component: LoanTypeLongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanTypeLongPageRoutingModule {}
