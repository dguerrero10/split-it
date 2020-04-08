import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLoanDetailsPageRoutingModule } from './new-loan-details-routing.module';

import { NewLoanDetailsPage } from './new-loan-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLoanDetailsPageRoutingModule
  ],
  declarations: [NewLoanDetailsPage]
})
export class NewLoanDetailsPageModule {}
