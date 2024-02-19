import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'prices',
    loadChildren: () => import('./pages/prices/prices.module').then(m => m.PricesModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPageModule)
  },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    }),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
