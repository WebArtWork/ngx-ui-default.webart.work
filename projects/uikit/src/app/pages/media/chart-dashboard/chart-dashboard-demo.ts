import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-chart-dashboard-demo',
	imports: [ChartComponent],
	templateUrl: './chart-dashboard-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartDashboardDemo {
	protected readonly revenue = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		datasets: [
			{ label: 'Revenue', data: [45, 52, 38, 65, 59, 72], borderColor: '#60a5fa', fill: false, tension: 0.4 },
		],
	};

	protected readonly channels = {
		labels: ['Direct', 'Social', 'Referral', 'Organic'],
		datasets: [{ data: [30, 25, 15, 30], backgroundColor: ['#60a5fa', '#4ade80', '#facc15', '#f87171'] }],
	};

	protected readonly weeklyActive = {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [{ label: 'Active Users', data: [120, 150, 130, 170, 160, 90, 80], backgroundColor: '#a78bfa' }],
	};

	protected readonly chartOptions = { plugins: { legend: { display: false } }, maintainAspectRatio: false };
}
