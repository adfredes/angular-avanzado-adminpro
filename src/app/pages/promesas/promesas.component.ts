import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promesa = new Promise((res, rej) => {
    //   if (true){
    //     res('hola mundo');
    //   }else{
    //     rej('Algo salio mal');
    //   }
      
    // });

    // promesa.then(mensaje => console.log(mensaje))
    //        .catch(error => console.log(error));

    // console.log('Fin del init');

    this.getUsuario()
        .then(usuarios => console.log(usuarios));
  }

  getUsuario =  () => {

    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users?page=2')
      .then(resp => resp.json() )
      .then( body => resolve(body.data));
    })

    return promesa;

    
  }

}
