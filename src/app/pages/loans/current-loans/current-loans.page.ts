import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-loans',
  templateUrl: './current-loans.page.html',
  styleUrls: ['./current-loans.page.scss'],
})
export class CurrentLoansPage implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log(ev)
  }

}