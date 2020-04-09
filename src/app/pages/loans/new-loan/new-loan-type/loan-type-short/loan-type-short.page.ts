import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-type-short',
  templateUrl: './loan-type-short.page.html',
  styleUrls: ['./loan-type-short.page.scss'],
})
export class LoanTypeShortPage implements OnInit {
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
