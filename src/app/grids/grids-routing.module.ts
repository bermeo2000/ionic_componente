import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridsPage } from './grids.page';

const routes: Routes = [
  {
    path: '',
    component: GridsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridsPageRoutingModule {}
