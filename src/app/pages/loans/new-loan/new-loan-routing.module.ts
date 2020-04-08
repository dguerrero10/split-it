import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLoanPage } from './new-loan.page';

const routes: Routes = [
  {
    path: '',
    component: NewLoanPage
  },
  {
    path: 'new-loan-details',
    loadChildren: () => import('./new-loan-details/new-loan-details.module').then( m => m.NewLoanDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLoanPageRoutingModule {}
