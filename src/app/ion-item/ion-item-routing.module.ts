import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonItemPage } from './ion-item.page';

const routes: Routes = [
  {
    path: '',
    component: IonItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonItemPageRoutingModule {}
