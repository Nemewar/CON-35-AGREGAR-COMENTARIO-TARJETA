import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscribirComentarioPage } from './escribir-comentario.page';

const routes: Routes = [
  {
    path: '',
    component: EscribirComentarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscribirComentarioPageRoutingModule {}
