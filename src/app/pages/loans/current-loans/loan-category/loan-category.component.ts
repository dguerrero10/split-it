import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-category',
  templateUrl: './loan-category.component.html',
  styleUrls: ['./loan-category.component.scss'],
})
export class LoanCategoryComponent implements OnInit {
  public dummyLoans = [
    {
      personName: 'Zach Walsh',
      username: '@aaargggghhhh',
      loanName: 'Moving Loan',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      currentLoanBalance: 400,
      totalLoanBalance: 800,
      loanStartDate: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {}

}
