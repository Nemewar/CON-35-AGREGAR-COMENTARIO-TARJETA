import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscribirUsuarioPage } from './escribir-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: EscribirUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscribirUsuarioPageRoutingModule {}
