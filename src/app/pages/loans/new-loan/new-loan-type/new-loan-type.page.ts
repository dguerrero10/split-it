import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-loan-type',
  templateUrl: './new-loan-type.page.html',
  styleUrls: ['./new-loan-type.page.scss'],
})
export class NewLoanTypePage implements OnInit {
  public person = [
    {
      name: "Zach Walsh",
      avatarUrl: '../../../assets/avatars/zach.jpg',
      username: '@aaargggghhhh',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
