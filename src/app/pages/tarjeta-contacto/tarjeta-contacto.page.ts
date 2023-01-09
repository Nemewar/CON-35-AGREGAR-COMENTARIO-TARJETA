import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tarjeta-contacto',
  templateUrl: './tarjeta-contacto.page.html',
  styleUrls: ['./tarjeta-contacto.page.scss'],
})
export class TarjetaContactoPage implements OnInit {

  constructor(private modalCtrl: ModalController,
    private routerOutlet:IonRouterOutlet) { }

  ngOnInit() {
  }


  // async mostrarModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: ListaUsuariosPage,
  //     swipeToClose: true,
  //     presentingElement: this.routerOutlet.nativeEl
  //   });
  //   return await modal.present();
  // }


}
