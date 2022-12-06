import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'action-sheet',
    pathMatch: 'full'
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'acordion',
    loadChildren: () => import('./acordion/acordion.module').then( m => m.AcordionPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then( m => m.AlertPageModule)
  },

  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'breadcrumbs',
    loadChildren: () => import('./breadcrumbs/breadcrumbs.module').then( m => m.BreadcrumbsPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkboxes',
    loadChildren: () => import('./checkboxes/checkboxes.module').then( m => m.CheckboxesPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'datetime-button',
    loadChildren: () => import('./datetime-button/datetime-button.module').then( m => m.DatetimeButtonPageModule)
  },
  {
    path: 'ion-fab',
    loadChildren: () => import('./ion-fab/ion-fab.module').then( m => m.IonFabPageModule)
  },
  {
    path: 'grids',
    loadChildren: () => import('./grids/grids.module').then( m => m.GridsPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'ion-input',
    loadChildren: () => import('./ion-input/ion-input.module').then( m => m.IonInputPageModule)
  },
  {
    path: 'ion-item',
    loadChildren: () => import('./ion-item/ion-item.module').then( m => m.IonItemPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'ion-loading',
    loadChildren: () => import('./ion-loading/ion-loading.module').then( m => m.IonLoadingPageModule)
  },
  {
    path: 'skeletor',
    loadChildren: () => import('./skeletor/skeletor.module').then( m => m.SkeletorPageModule)
  },
  {
    path: 'refreshers',
    loadChildren: () => import('./refreshers/refreshers.module').then( m => m.RefreshersPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./reorder/reorder.module').then( m => m.ReorderPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'mapa-google',
    loadChildren: () => import('./mapa-google/mapa-google.module').then( m => m.MapaGooglePageModule)
  },
  {
    path: 'google',
    loadChildren: () => import('./google/google.module').then( m => m.GooglePageModule)
  },
  //{
  //  path: 'folder/:id',
   // loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  //}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
