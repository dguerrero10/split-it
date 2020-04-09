import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentLoansPageRoutingModule } from './current-loans-routing.module';

import { CurrentLoansPage } from './current-loans.page';
import { PeopleCategoryComponent } from './people-category/people-category.component';
import { LoanCategoryComponent } from './loan-category/loan-category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentLoansPageRoutingModule
  ],
  declarations: [CurrentLoansPage, PeopleCategoryComponent, LoanCategoryComponent]
})
export class CurrentLoansPageModule {}
