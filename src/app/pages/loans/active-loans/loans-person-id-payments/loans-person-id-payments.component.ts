import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans-person-id-payments',
  templateUrl: './loans-person-id-payments.component.html',
  styleUrls: ['./loans-person-id-payments.component.scss'],
})
export class LoansPersonIdPaymentsComponent implements OnInit {
  time = new Date()
  public dummyPayments = [
    {
      name: 'Zach Walsh',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      amount: 10,
      loanName: 'Moving Loan',
      timeSent: this.time
    },
    {
      name: 'Zach Walsh',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      amount: 60,
      loanName: 'Moving Loan',
      timeSent: this.time
    },
    {
      name: 'You',
      avatarUrl: '../../../assets/avatars/dave.jpg',
      recipient: 'Zach Walsh',
      amount: 65,
      loanName: 'Drugs and Alcohol Addiction',
      timeSent: this.time
    },
    {
      name: 'Zach Walsh',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      amount: 50,
      loanName: 'Moving Loan',
      timeSent: this.time
    }
  ];
  constructor() { }

  ngOnInit() {}

}
