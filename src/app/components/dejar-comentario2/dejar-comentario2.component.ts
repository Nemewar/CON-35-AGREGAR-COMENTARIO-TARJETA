import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-dejar-comentario2',
  templateUrl: './dejar-comentario2.component.html',
  styleUrls: ['./dejar-comentario2.component.scss'],
})
export class DejarComentario2Component implements OnInit, OnDestroy {


  constructor() {
    console.log("Hola mundo")
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    console.log("Destroy")
  }

  esLight(): boolean {
    if (document.querySelector("body")?.classList.contains("light")) {
      return true;
    } else {
      return false;
    }

  }

}
