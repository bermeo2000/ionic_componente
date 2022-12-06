import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GooglePageRoutingModule } from './google-routing.module';

import { GooglePage } from './google.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglePageRoutingModule
  ],
  declarations: [GooglePage]
})
export class GooglePageModule {}
