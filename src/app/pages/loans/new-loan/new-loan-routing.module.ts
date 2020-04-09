import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLoanPage } from './new-loan.page';

const routes: Routes = [
  {
    path: '',
    component: NewLoanPage
  },
  {
    path: 'new-loan-type',
    loadChildren: () => import('./new-loan-type/new-loan-type.module').then( m => m.NewLoanTypePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLoanPageRoutingModule {}
