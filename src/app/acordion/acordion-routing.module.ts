import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcordionPage } from './acordion.page';

const routes: Routes = [
  {
    path: '',
    component: AcordionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcordionPageRoutingModule {}
