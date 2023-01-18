import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escribir-comentarioc',
  templateUrl: './escribir-comentarioc.component.html',
  styleUrls: ['./escribir-comentarioc.component.scss'],
})
export class EscribirComentariocComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  esLight(): boolean {
    console.log("Hola")
    if (document.querySelector("body")?.classList.contains("light")) {
      return true;
    } else {
      return false;
    }

  }

}
