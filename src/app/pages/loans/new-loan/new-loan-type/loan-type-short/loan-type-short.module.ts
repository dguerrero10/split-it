import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanTypeShortPageRoutingModule } from './loan-type-short-routing.module';

import { LoanTypeShortPage } from './loan-type-short.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanTypeShortPageRoutingModule
  ],
  declarations: [LoanTypeShortPage]
})
export class LoanTypeShortPageModule {}
