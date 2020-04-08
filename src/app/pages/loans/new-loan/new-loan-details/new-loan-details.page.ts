import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-loan-details',
  templateUrl: './new-loan-details.page.html',
  styleUrls: ['./new-loan-details.page.scss'],
})
export class NewLoanDetailsPage implements OnInit {
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
