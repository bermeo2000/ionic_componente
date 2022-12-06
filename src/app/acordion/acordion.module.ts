import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcordionPageRoutingModule } from './acordion-routing.module';

import { AcordionPage } from './acordion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcordionPageRoutingModule
  ],
  declarations: [AcordionPage]
})
export class AcordionPageModule {}
