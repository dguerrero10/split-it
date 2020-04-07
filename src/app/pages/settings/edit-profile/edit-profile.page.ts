import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  firstName = "David";
  lastName = "Guerrero";
  username = "dguerrero55";
  email = "daveabdouguerrero@gmail.com"

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Upload Photo',
      buttons: [{
        text: 'Choose from Library...',
        handler: () => {
            console.log('Choose from Library clicked')
          }
      },{
        text: 'Take Photo...',
        handler: () => {
          console.log('Take Photo clicked');
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
