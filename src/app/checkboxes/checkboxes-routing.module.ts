import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxesPage } from './checkboxes.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxesPageRoutingModule {}
