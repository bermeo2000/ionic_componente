import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonFabPageRoutingModule } from './ion-fab-routing.module';

import { IonFabPage } from './ion-fab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonFabPageRoutingModule
  ],
  declarations: [IonFabPage]
})
export class IonFabPageModule {}
