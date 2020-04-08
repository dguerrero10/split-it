import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoansPersonIdPageRoutingModule } from './loans-person-id-routing.module';

import { LoansPersonIdPage } from './loans-person-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoansPersonIdPageRoutingModule
  ],
  declarations: [LoansPersonIdPage]
})
export class LoansPersonIdPageModule {}
