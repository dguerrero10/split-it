import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'home-page',
      icon: 'home'
    },
    {
      title: 'Active Loans',
      url: 'active-loans',
      icon: 'cash'
    },
    {
      title: 'Create Loan',
      url: 'new-loan',
      icon: 'create'
    },
    {
      title: 'Requested Loans',
      url: 'requested-loans',
      icon: 'receipt'
    },
    {
      title: 'Search People',
      url: 'search-people',
      icon: 'search'
    },
    {
      title: 'Settings',
      url: 'settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('home-page/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
