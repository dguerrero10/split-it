import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanTypeLongPageRoutingModule } from './loan-type-long-routing.module';

import { LoanTypeLongPage } from './loan-type-long.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanTypeLongPageRoutingModule
  ],
  declarations: [LoanTypeLongPage]
})
export class LoanTypeLongPageModule {}
