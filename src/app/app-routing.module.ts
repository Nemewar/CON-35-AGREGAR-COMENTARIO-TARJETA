import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tarjeta-contacto',
    pathMatch: 'full'
  },
  {
    path: 'tarjeta-contacto',
    loadChildren: () => import('./pages/tarjeta-contacto/tarjeta-contacto.module').then( m => m.TarjetaContactoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
