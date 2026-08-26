import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-chart-demo',
	imports: [ChartComponent],
	templateUrl: './chart-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartDemo {
	protected readonly barData = {
		labels: ['Q1', 'Q2', 'Q3', 'Q4'],
		datasets: [
			{
				label: 'Revenue',
				backgroundColor: '#60a5fa',
				data: [65, 59, 80, 81],
			},
		],
	};

	protected readonly lineData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
		datasets: [
			{
				label: 'Users',
				data: [12, 19, 13, 25, 22],
				fill: false,
				borderColor: '#4ade80',
				tension: 0.4,
			},
		],
	};
}
