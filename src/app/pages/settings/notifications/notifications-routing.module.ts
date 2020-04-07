import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsPage } from './notifications.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
  },
  {
    path: 'text-notifications',
    loadChildren: () => import('./text-notifications/text-notifications.module').then( m => m.TextNotificationsPageModule)
  },
  {
    path: 'email-notifications',
    loadChildren: () => import('./email-notifications/email-notifications.module').then( m => m.EmailNotificationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsPageRoutingModule {}
