import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../admin/products-dashboard/services/products.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = ['Total de produtos', 'Total de Lojas', 'Total de funcionarios'];
  public doughnutChartData: number[] = [1000, 5, 5];
  public doughnutChartType: string = 'doughnut';

  constructor() {

  }

  ngOnInit() {
  }

}

