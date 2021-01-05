import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {
  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100]    
  // ];
  @Input() labels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() data: MultiDataSet = [[350, 450, 100]   ];
  @Input() title: string = 'Dona'  ;
 
  @Input() colors: Color[] = [{backgroundColor: ['#6857E6','#009FEE','#F02059']}]

  constructor() { }

  ngOnInit(): void {
  }

}
