import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonLoadingPageRoutingModule } from './ion-loading-routing.module';

import { IonLoadingPage } from './ion-loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonLoadingPageRoutingModule
  ],
  declarations: [IonLoadingPage]
})
export class IonLoadingPageModule {}
