import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dejar-comentario2',
  templateUrl: './dejar-comentario2.component.html',
  styleUrls: ['./dejar-comentario2.component.scss'],
})
export class DejarComentario2Component implements OnInit,OnDestroy {

  
  constructor() { 
    console.log("Hola mundo")
  }

  ngOnInit() {
    
  }

  ngOnDestroy(): void {
    console.log("Destroy")
  }

}
