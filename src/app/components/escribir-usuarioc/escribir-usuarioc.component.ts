import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escribir-usuarioc',
  templateUrl: './escribir-usuarioc.component.html',
  styleUrls: ['./escribir-usuarioc.component.scss'],
})
export class EscribirUsuariocComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  esLight(): boolean {
    if (document.querySelector("body")?.classList.contains("light")) {
      return true;
    } else {
      return false;
    }

  }

}
