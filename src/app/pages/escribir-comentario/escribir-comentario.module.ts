import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscribirComentarioPageRoutingModule } from './escribir-comentario-routing.module';

import { EscribirComentarioPage } from './escribir-comentario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscribirComentarioPageRoutingModule
  ],
  declarations: [EscribirComentarioPage]
})
export class EscribirComentarioPageModule {}
