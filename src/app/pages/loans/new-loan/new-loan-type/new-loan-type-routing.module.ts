import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLoanTypePage } from './new-loan-type.page';

const routes: Routes = [
  {
    path: '',
    component: NewLoanTypePage
  },
  {
    path: 'loan-type-long',
    loadChildren: () => import('./loan-type-long/loan-type-long.module').then( m => m.LoanTypeLongPageModule)
  },
  {
    path: 'loan-type-short',
    loadChildren: () => import('./loan-type-short/loan-type-short.module').then( m => m.LoanTypeShortPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLoanTypePageRoutingModule {}
