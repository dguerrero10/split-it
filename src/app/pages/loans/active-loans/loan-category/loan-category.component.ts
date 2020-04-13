import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-category',
  templateUrl: './loan-category.component.html',
  styleUrls: ['./loan-category.component.scss'],
})
export class LoanCategoryComponent implements OnInit {
  people: boolean;

  public dummyYou = [
    {
      personName: 'You',
      username: 'dguerrero55',
      toPerson: 'Zach Walsh',
      loanName: 'Alcohol and Rent',
      avatarUrl: '../../../assets/avatars/dave.jpg',
      currentLoanBalance: 1600,
      totalLoanAmount: 1700,
      nextPayment: new Date(),
      loanStartDate: new Date()
    }
  ]

  public dummyLoans = [
    {
      personName: 'Zach Walsh',
      username: '@aaargggghhhh',
      loanName: 'Moving Loan',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      currentLoanBalance: 400,
      totalLoanAmount: 800,
      nextPayment: new Date(),
      loanStartDate: new Date()
    },
    {
      personName: 'Rob Hanna',
      username: '@robbie33',
      loanName: 'Drugs and Alochol Addiction',
      avatarUrl: '../../../assets/avatars/rob.jpg',
      currentLoanBalance: 100,
      totalLoanAmount: 700,
      nextPayment: new Date(),
      loanStartDate: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {}

}
