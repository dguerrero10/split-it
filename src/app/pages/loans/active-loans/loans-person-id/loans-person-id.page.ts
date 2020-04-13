import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-loans-person-id',
  templateUrl: './loans-person-id.page.html',
  styleUrls: ['./loans-person-id.page.scss'],
})
export class LoansPersonIdPage implements OnInit {
  segment: any;

  public person = [
    {
      name: "Zach Walsh",
      avatarUrl: '../../../assets/avatars/zach.jpg',
      username: '@aaargggghhhh',
    }
  ];

  constructor(public alertController: AlertController,
              public actionSheetController: ActionSheetController) { 
                this.segment = "Payments"
              }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async presentActionSheetUserOptions() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Block',
        role: 'destructive',
      },{
        text: 'Forgive All Debt',
        handler: () => {
         this.presentAlertConfirm();
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
  
  async presentActionSheetPayCreateOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Pay or Create Loan',
      buttons: [{
        text: 'Pay',
        icon: 'cash-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Create',
        icon: 'create-outline',
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: "Pressing Accept will delete all information pertaining to this debt.",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Accept',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
}
