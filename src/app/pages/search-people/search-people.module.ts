import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPeoplePageRoutingModule } from './search-people-routing.module';

import { SearchPeoplePage } from './search-people.page';
import { SearchPageOptionsComponent } from './search-page-options/search-page-options.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPeoplePageRoutingModule
  ],
  declarations: [SearchPeoplePage, SearchPageOptionsComponent],
  entryComponents: [SearchPageOptionsComponent]
})
export class SearchPeoplePageModule {}
