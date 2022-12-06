import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimeButtonPage } from './datetime-button.page';

const routes: Routes = [
  {
    path: '',
    component: DatetimeButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimeButtonPageRoutingModule {}
