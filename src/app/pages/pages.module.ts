import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';


import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';





@NgModule({
  declarations: [    
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,    
    SharedModule,
    RouterModule,
    ComponentsModule
  ],
  exports:[
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent 
  ]
})
export class PagesModule { }
