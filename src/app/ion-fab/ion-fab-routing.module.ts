import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonFabPage } from './ion-fab.page';

const routes: Routes = [
  {
    path: '',
    component: IonFabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonFabPageRoutingModule {}
