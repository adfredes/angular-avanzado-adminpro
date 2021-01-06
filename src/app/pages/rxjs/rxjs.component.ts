import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subs: Subscription;

  constructor() { 
       

    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //     valor => console.log('Subs:', valor),
    //     err => console.warn(err),
    //     () => console.info('Obs terminado')
    // );

    this.subs = this.retornaIntervalo()
      .subscribe(console.log);

  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
  }

  retornaIntervalo(): Observable<number> {
    return interval(500).pipe(
      map(valor => valor + 1),
      filter(valor => valor % 2 === 0),
          
      );
    
  }

  retornaObservable():Observable<number>{
    let i = -1;
    
    return new Observable<number>( observer => {

      const intervalo = setInterval( () => {
        i++;
        observer.next(i);
        
        if (i === 4){
          clearInterval(intervalo);
          observer.complete();
        }
        
        if (i === 2) {
          i = -1;
          observer.error('Error, el valor es 2');
        }
      }, 1000);

    });
    
  }

}
