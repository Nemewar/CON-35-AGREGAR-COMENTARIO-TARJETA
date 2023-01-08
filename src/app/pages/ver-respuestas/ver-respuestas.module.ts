import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerRespuestasPageRoutingModule } from './ver-respuestas-routing.module';

import { VerRespuestasPage } from './ver-respuestas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerRespuestasPageRoutingModule
  ],
  declarations: [VerRespuestasPage]
})
export class VerRespuestasPageModule {}
