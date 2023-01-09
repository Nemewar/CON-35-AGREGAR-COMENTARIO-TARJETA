import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-respuestasc',
  templateUrl: './ver-respuestasc.component.html',
  styleUrls: ['./ver-respuestasc.component.scss'],
})
export class VerRespuestascComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


  mostrarMensaje(){
    console.log("Hola mundo")
  }

}
