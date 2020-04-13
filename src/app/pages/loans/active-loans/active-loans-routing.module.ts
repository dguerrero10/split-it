import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveLoansPage } from './active-loans.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveLoansPage
  },
  {
    path: 'loans-person-id',
    loadChildren: () => import('./loans-person-id/loans-person-id.module').then( m => m.LoansPersonIdPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveLoansPageRoutingModule {}
