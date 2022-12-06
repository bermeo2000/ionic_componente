import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaGooglePage } from './mapa-google.page';

const routes: Routes = [
  {
    path: '',
    component: MapaGooglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaGooglePageRoutingModule {}
