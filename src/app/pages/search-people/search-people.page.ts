import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.page.html',
  styleUrls: ['./search-people.page.scss'],
})
export class SearchPeoplePage implements OnInit {
  public dummyPeople = [
    {
      name: 'Zach Walsh',
      username: '@aaargggghhhh',
      avatarUrl: '../../../assets/avatars/zach.jpg',
    },
    {
      name: 'Rob Hanna',
      username: '@robbie33',
      avatarUrl: '../../../assets/avatars/rob.jpg',
    }
  ];

  constructor(public actionSheetController: ActionSheetController) {}

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Invite',
      },{
        text: 'Import Contacts',
        handler: () => {
          console.log('Add Bank clicked');
        }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
