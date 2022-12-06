import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeButtonPageRoutingModule } from './datetime-button-routing.module';

import { DatetimeButtonPage } from './datetime-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeButtonPageRoutingModule
  ],
  declarations: [DatetimeButtonPage]
})
export class DatetimeButtonPageModule {}
