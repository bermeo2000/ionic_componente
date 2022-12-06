import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefreshersPage } from './refreshers.page';

const routes: Routes = [
  {
    path: '',
    component: RefreshersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefreshersPageRoutingModule {}
