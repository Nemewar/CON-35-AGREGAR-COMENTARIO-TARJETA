import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalcontactoComponent } from './modalcontacto/modalcontacto.component';
import { IonicModule } from '@ionic/angular';
import { DejarComentario2Component } from './dejar-comentario2/dejar-comentario2.component';
import { ListaUsuarioscComponent } from './lista-usuariosc/lista-usuariosc.component';
import { EscribirUsuariocComponent } from './escribir-usuarioc/escribir-usuarioc.component';
import { EscribirComentariocComponent } from './escribir-comentarioc/escribir-comentarioc.component';
import { VerRespuestascComponent } from './ver-respuestasc/ver-respuestasc.component';



@NgModule({
  declarations: [HeaderComponent,
  ModalcontactoComponent,DejarComentario2Component,
  ListaUsuarioscComponent,EscribirUsuariocComponent,
  EscribirComentariocComponent,
  VerRespuestascComponent],
  exports: [
    HeaderComponent,
    ModalcontactoComponent,
    DejarComentario2Component,
    ListaUsuarioscComponent,
    EscribirUsuariocComponent,
    EscribirComentariocComponent,
    VerRespuestascComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
