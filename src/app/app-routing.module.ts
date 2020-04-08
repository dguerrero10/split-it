import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'current-loans',
    loadChildren: () => import('./pages/loans/current-loans/current-loans.module').then( m => m.CurrentLoansPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'search-people',
    loadChildren: () => import('./pages/search-people/search-people.module').then( m => m.SearchPeoplePageModule)
  },  {
    path: 'new-loan',
    loadChildren: () => import('./pages/loans/new-loan/new-loan.module').then( m => m.NewLoanPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
