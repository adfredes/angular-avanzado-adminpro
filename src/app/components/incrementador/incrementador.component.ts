import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  // @Input('valor') progreso: number = 50;  
  @Input('valor') progreso: number = 50; 
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida = new EventEmitter<number>();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor = (valor: number) => {
    this.progreso = this.progreso + valor
    if(this.progreso > 100 ) this.progreso = 100;
    if(this.progreso < 0) this.progreso = 0;

    this.valorSalida.emit(this.progreso);
    
  };

  onChange = (nuevoValor: number) =>  {    
    if(!nuevoValor || nuevoValor === 0){
      nuevoValor = 0;
    }
    else if(nuevoValor >= 100){      
      nuevoValor = 100      
    }
    else {
      nuevoValor = nuevoValor
    }

    this.valorSalida.emit(nuevoValor);
  };

}
