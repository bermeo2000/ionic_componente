import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaGooglePageRoutingModule } from './mapa-google-routing.module';

import { MapaGooglePage } from './mapa-google.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaGooglePageRoutingModule
  ],
  declarations: [MapaGooglePage]
})
export class MapaGooglePageModule {}
