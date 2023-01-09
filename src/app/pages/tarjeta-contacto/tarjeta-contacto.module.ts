import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaContactoPageRoutingModule } from './tarjeta-contacto-routing.module';

import { TarjetaContactoPage } from './tarjeta-contacto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaContactoPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TarjetaContactoPage]
})
export class TarjetaContactoPageModule {}
