import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerRespuestasPage } from './ver-respuestas.page';

const routes: Routes = [
  {
    path: '',
    component: VerRespuestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerRespuestasPageRoutingModule {}
