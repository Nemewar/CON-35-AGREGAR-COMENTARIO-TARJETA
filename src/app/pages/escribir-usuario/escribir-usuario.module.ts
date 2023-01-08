import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscribirUsuarioPageRoutingModule } from './escribir-usuario-routing.module';

import { EscribirUsuarioPage } from './escribir-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscribirUsuarioPageRoutingModule
  ],
  declarations: [EscribirUsuarioPage]
})
export class EscribirUsuarioPageModule {}
