import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPeoplePageRoutingModule } from './search-people-routing.module';

import { SearchPeoplePage } from './search-people.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPeoplePageRoutingModule
  ],
  declarations: [SearchPeoplePage],
  entryComponents: []
})
export class SearchPeoplePageModule {}
