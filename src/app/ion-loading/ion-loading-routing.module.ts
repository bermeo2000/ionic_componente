import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonLoadingPage } from './ion-loading.page';

const routes: Routes = [
  {
    path: '',
    component: IonLoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonLoadingPageRoutingModule {}
