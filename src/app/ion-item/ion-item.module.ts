import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonItemPageRoutingModule } from './ion-item-routing.module';

import { IonItemPage } from './ion-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonItemPageRoutingModule
  ],
  declarations: [IonItemPage]
})
export class IonItemPageModule {}
