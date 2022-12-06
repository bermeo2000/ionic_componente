import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonInputPageRoutingModule } from './ion-input-routing.module';

import { IonInputPage } from './ion-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonInputPageRoutingModule
  ],
  declarations: [IonInputPage]
})
export class IonInputPageModule {}
