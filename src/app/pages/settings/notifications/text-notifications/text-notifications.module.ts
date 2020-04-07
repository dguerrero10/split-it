import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextNotificationsPageRoutingModule } from './text-notifications-routing.module';

import { TextNotificationsPage } from './text-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextNotificationsPageRoutingModule
  ],
  declarations: [TextNotificationsPage]
})
export class TextNotificationsPageModule {}
