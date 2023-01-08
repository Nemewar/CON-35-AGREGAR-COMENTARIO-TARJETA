import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dejar-comentario',
    loadChildren: () => import('./pages/dejar-comentario/dejar-comentario.module').then( m => m.DejarComentarioPageModule)
  },
  {
    path: 'lista-usuarios',
    loadChildren: () => import('./pages/lista-usuarios/lista-usuarios.module').then( m => m.ListaUsuariosPageModule)
  },
  {
    path: 'escribir-usuario',
    loadChildren: () => import('./pages/escribir-usuario/escribir-usuario.module').then( m => m.EscribirUsuarioPageModule)
  },
  {
    path: 'ver-respuestas',
    loadChildren: () => import('./pages/ver-respuestas/ver-respuestas.module').then( m => m.VerRespuestasPageModule)
  },
  {
    path: 'escribir-comentario',
    loadChildren: () => import('./pages/escribir-comentario/escribir-comentario.module').then( m => m.EscribirComentarioPageModule)
  },
  {
    path: '',
    redirectTo: 'dejar-comentario',
    pathMatch: 'full'
  },
  {
    path: 'tarjeta-contacto',
    loadChildren: () => import('./pages/tarjeta-contacto/tarjeta-contacto.module').then( m => m.TarjetaContactoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
