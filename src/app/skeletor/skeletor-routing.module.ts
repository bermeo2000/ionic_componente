import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkeletorPage } from './skeletor.page';

const routes: Routes = [
  {
    path: '',
    component: SkeletorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkeletorPageRoutingModule {}
