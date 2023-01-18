import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-lista-usuariosc',
  templateUrl: './lista-usuariosc.component.html',
  styleUrls: ['./lista-usuariosc.component.scss'],
})
export class ListaUsuarioscComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
    private routerOutlet:IonRouterOutlet) { }

  ngOnInit() {}

  // async mostrarModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: ListaUsuariosPage,
  //     swipeToClose: true,
  //     presentingElement: this.routerOutlet.nativeEl
  //   });
  //   return await modal.present();
  // }

  async ocultarModal(){
    this.modalCtrl.dismiss();
  }

  esLight(): boolean {
    console.log("Hola")
    if (document.querySelector("body")?.classList.contains("light")) {
      return true;
    } else {
      return false;
    }

  }

}
