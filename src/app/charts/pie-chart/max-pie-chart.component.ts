import { Component, Input } from '@angular/core';
import { PieChartData } from '../PieChartData';

@Component({
  selector: 'app-max-pie-chart',
  templateUrl: './max-pie-chart.component.html',
  styleUrl: './max-pie-chart.component.scss',
})
export class MaxPieChartComponent {
  @Input({ required: true }) data!: PieChartData[];
  @Input() view: [number, number] = [800, 300];
  @Input() animations!: boolean;
  @Input() legendVBC = true;
}
