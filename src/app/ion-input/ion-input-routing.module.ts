import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonInputPage } from './ion-input.page';

const routes: Routes = [
  {
    path: '',
    component: IonInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonInputPageRoutingModule {}
