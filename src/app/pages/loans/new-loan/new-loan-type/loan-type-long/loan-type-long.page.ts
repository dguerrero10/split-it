import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-type-long',
  templateUrl: './loan-type-long.page.html',
  styleUrls: ['./loan-type-long.page.scss'],
})
export class LoanTypeLongPage implements OnInit {
  installment: boolean;
  interest: boolean;

  public person = [
    {
      name: "Zach Walsh",
      avatarUrl: '../../../assets/avatars/zach.jpg',
      username: '@aaargggghhhh',
    }
  ];
  
  addInstallment() {
    this.installment === true ? true: false;
  }

  addInterest() {
    this.interest === true? true: false;
  }

  constructor() { }

  ngOnInit() {
  }

}
