import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-loans-person-id',
  templateUrl: './loans-person-id.page.html',
  styleUrls: ['./loans-person-id.page.scss'],
})
export class LoansPersonIdPage implements OnInit {
  public person = [
    {
      name: "Zach Walsh",
      avatarUrl: '../../../assets/avatars/zach.jpg',
      username: '@aaargggghhhh',
    }
  ];

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Block',
        role: 'destructive',
      },{
        text: 'Forgive Debt',
        handler: () => {
          console.log('Debt Forgiven');
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
