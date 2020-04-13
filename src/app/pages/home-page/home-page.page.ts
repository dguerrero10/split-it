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
      loanName: 'Moving Loan',
      timeSent: this.time
    },
    {
      name: 'Rob Hanna',
      avatarUrl: '../../../assets/avatars/rob.jpg',
      amount: 400,
      loanName: 'Rent Loan',
      timeSent: this.time
    },
    {
      name: 'You',
      recipient: 'Rob Hanna',
      avatarUrl: '../../../assets/avatars/dave.jpg',
      amount: 200,
      loanName: 'Drugs and Alcohol Addiction',
      timeSent: this.time
    }
  ];

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  constructor() { }

  ngOnInit() {
  }

}
