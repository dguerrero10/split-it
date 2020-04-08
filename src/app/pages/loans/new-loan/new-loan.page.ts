import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.page.html',
  styleUrls: ['./new-loan.page.scss'],
})
export class NewLoanPage implements OnInit {
  public dummyPeople = [
    {
      name: 'Zach Walsh',
      username: '@aaargggghhhh',
      avatarUrl: '../../../assets/avatars/zach.jpg',
    },
    {
      name: 'Rob Hannah',
      username: '@robbie33',
      avatarUrl: '../../../assets/avatars/rob.jpg',
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
