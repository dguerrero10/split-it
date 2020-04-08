import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentLoansPageRoutingModule } from './current-loans-routing.module';

import { CurrentLoansPage } from './current-loans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentLoansPageRoutingModule
  ],
  declarations: [CurrentLoansPage]
})
export class CurrentLoansPageModule {}
