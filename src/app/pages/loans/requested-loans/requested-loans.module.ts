import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestedLoansPageRoutingModule } from './requested-loans-routing.module';

import { RequestedLoansPage } from './requested-loans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestedLoansPageRoutingModule
  ],
  declarations: [RequestedLoansPage]
})
export class RequestedLoansPageModule {}
