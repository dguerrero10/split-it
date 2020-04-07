import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AddCardModalComponent } from '../payment-methods/components/add-card-modal/add-card-modal.component';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.page.html',
  styleUrls: ['./payment-methods.page.scss'],
})
export class PaymentMethodsPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController,
              private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Add Bank or Card',
      buttons: [{
        text: 'Add Card',
        icon: 'card-outline',
        handler: () => {
            this.modalCtrl.create({
              component: AddCardModalComponent
            }).then(modalEL => {
              modalEL.present();
            });
          }
      },{
        text: 'Add Bank',
        icon: 'business-outline',
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
