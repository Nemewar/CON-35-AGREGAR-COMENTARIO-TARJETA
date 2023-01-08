import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DejarComentarioPage } from './dejar-comentario.page';

const routes: Routes = [
  {
    path: '',
    component: DejarComentarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DejarComentarioPageRoutingModule {}
