import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-category',
  templateUrl: './people-category.component.html',
  styleUrls: ['./people-category.component.scss'],
})
export class PeopleCategoryComponent implements OnInit {
  people = true;
  
  public dummyYou = [
    {
      personName: 'You',
      username: '@dguerrero55',
      avatarUrl: '../../../assets/avatars/dave.jpg',
      loanCount: 2,
      totalLoanBalance: 1000
    }
  ];

  public dummyPeople = [
    {
      personName: 'Zach Walsh',
      username: '@aaargggghhhh',
      avatarUrl: '../../../assets/avatars/zach.jpg',
      loanCount: 2,
      totalLoanBalance: 400
    },
    {
      personName: 'Rob Hanna',
      username: '@robbie33',
      avatarUrl: '../../../assets/avatars/rob.jpg',
      loanCount: 1,
      totalLoanBalance: 700
    }
  ];

  constructor() { }

  ngOnInit() {}

}
