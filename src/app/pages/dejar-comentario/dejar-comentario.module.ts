import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DejarComentarioPageRoutingModule } from './dejar-comentario-routing.module';

import { DejarComentarioPage } from './dejar-comentario.page';
import { ListaUsuariosPageModule } from '../lista-usuarios/lista-usuarios.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DejarComentarioPageRoutingModule,
    ListaUsuariosPageModule
  ],
  declarations: [DejarComentarioPage],
  exports:[DejarComentarioPage]
})
export class DejarComentarioPageModule {}
