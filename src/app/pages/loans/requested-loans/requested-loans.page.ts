import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requested-loans',
  templateUrl: './requested-loans.page.html',
  styleUrls: ['./requested-loans.page.scss'],
})
export class RequestedLoansPage implements OnInit {

  public dummyRequest = [ 
    {
      personName: 'Danny Roel',
      username: '@droel69',
      avatarUrl: '../../../assets/avatars/dave.jpg',
      loanName: 'Movie Night',
      typeOfLoan: 'Short',
      totalLoanAmount: 60
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
