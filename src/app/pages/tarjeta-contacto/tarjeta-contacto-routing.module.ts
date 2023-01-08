import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaContactoPage } from './tarjeta-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaContactoPageRoutingModule {}
