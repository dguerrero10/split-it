import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPeoplePage } from './search-people.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPeoplePageRoutingModule {}
