import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefreshersPageRoutingModule } from './refreshers-routing.module';

import { RefreshersPage } from './refreshers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefreshersPageRoutingModule
  ],
  declarations: [RefreshersPage]
})
export class RefreshersPageModule {}
