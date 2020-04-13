import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveLoansPageRoutingModule } from './active-loans-routing.module';

import { ActiveLoansPage } from './active-loans.page';
import { PeopleCategoryComponent } from './people-category/people-category.component';
import { LoanCategoryComponent } from './loan-category/loan-category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveLoansPageRoutingModule
  ],
  declarations: [ActiveLoansPage, PeopleCategoryComponent, LoanCategoryComponent]
})
export class ActiveLoansPageModule {}
