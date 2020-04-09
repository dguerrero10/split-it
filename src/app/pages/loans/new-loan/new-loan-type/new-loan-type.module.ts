import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLoanTypePageRoutingModule } from './new-loan-type-routing.module';

import { NewLoanTypePage } from './new-loan-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLoanTypePageRoutingModule
  ],
  declarations: [NewLoanTypePage]
})
export class NewLoanTypePageModule {}
