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
      avatarUrl: '../../../assets/avatars/rob.jpg',
      amount: 10,
      note: 'Loan Payment',
      timeSent: this.time
    },
    {
      name: 'Rob Hannah',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      amount: 400,
      note: 'Monthly Rent',
      timeSent: this.time
    },
    {
      name: 'Rob Hannah',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      amount: 400,
      note: 'Monthly Rent',
      timeSent: this.time
    },
    {
      name: 'Rob Hannah',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      amount: 400,
      note: 'Monthly Rent',
      timeSent: this.time
    },
    {
      name: 'Rob Hannah',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      amount: 400,
      note: 'Monthly Rent',
      timeSent: this.time
    },
    {
      name: 'Rob Hannah',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      amount: 400,
      note: 'Monthly Rent',
      timeSent: this.time
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
