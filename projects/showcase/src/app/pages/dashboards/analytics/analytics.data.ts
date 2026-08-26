export interface KpiStat {
	label: string;
	value: string;
	change: string;
	trend: 'up' | 'down';
	icon: string;
}

export const KPI_STATS: KpiStat[] = [
	{ label: 'Sessions', value: '48,204', change: '+12.4%', trend: 'up', icon: 'pi pi-eye' },
	{ label: 'Conversion Rate', value: '3.42%', change: '+0.6%', trend: 'up', icon: 'pi pi-percentage' },
	{ label: 'Avg. Order Value', value: '$86.20', change: '-2.1%', trend: 'down', icon: 'pi pi-wallet' },
	{ label: 'Churn', value: '1.9%', change: '-0.3%', trend: 'up', icon: 'pi pi-user-minus' },
];

export const REVENUE_TREND = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
	datasets: [
		{
			label: 'Revenue',
			data: [32, 41, 38, 55, 61, 58, 72],
			borderColor: '#60a5fa',
			backgroundColor: 'rgba(96, 165, 250, 0.2)',
			fill: true,
			tension: 0.4,
		},
	],
};

export const GOAL_METERS = [
	{ label: 'New Customers', value: 62, color: '#60a5fa' },
	{ label: 'Retention', value: 84, color: '#4ade80' },
	{ label: 'Support SLA', value: 91, color: '#facc15' },
];
