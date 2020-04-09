import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  time = new Date()
  public dummyNotifications = [
    {
      name: 'Zach Walsh',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      amount: 10,
      loanCat: 'Moving Loan',
      timeSent: this.time
    },
    {
      name: 'Rob Hanna',
      avatarUrl: '../../../assets/avatars/rob.jpg',
      amount: 400,
      loanCat: 'Rent Loan',
      timeSent: this.time
    },
    {
      name: 'You',
      recipient: 'Rob Hanna',
      avatarUrl: '../../../assets/avatars/dave.jpg',
      amount: 200,
      loanCat: 'Drugs and Alcohol Addiction',
      timeSent: this.time
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
