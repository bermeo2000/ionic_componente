import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsPage } from './breadcrumbs.page';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsPageRoutingModule {}
