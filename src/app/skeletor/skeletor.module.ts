import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkeletorPageRoutingModule } from './skeletor-routing.module';

import { SkeletorPage } from './skeletor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkeletorPageRoutingModule
  ],
  declarations: [SkeletorPage]
})
export class SkeletorPageModule {}
