import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextNotificationsPage } from './text-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: TextNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextNotificationsPageRoutingModule {}
