import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public title: string = '';
  private tituloSubs$: Subscription;

  constructor(private router:Router, private route:ActivatedRoute) {     
    // this.tituloSubs$ = route.children[0].data.subscribe(
    //   ({title}) => {
    //     this.title = title;
    //     document.title = `AdminPro - ${title}`;
    //   }
    // )
    this.tituloSubs$ = this.getArgumentoRutas().subscribe(
      ({title}) => {
        this.title = title;
        document.title = `AdminPro - ${title}`;
    });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentoRutas(){
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )    
  }

  ngOnInit(): void {
  }

}
