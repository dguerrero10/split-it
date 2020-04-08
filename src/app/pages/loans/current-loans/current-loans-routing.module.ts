import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentLoansPage } from './current-loans.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentLoansPage
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
export class CurrentLoansPageRoutingModule {}
