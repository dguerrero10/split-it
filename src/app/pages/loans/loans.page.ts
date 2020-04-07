import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {
  people = true;

  public dummyPeople = [
    {
      name: 'Zach Walsh',
      username: '@aaargggghhhh',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      totalBalanceOwed: 400
    },
    {
      name: 'Rob Hannah',
      username: '@robbie33',
      avatarUrl: '../../../assets/avatars/rob.jpg',
      totalBalanceOwed: 700
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log(ev)
  }

}
