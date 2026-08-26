export interface DashboardStat {
	label: string;
	value: string;
	icon: string;
}

export const DASHBOARD_STATS: DashboardStat[] = [
	{ label: 'Orders', value: '152', icon: 'pi pi-shopping-cart' },
	{ label: 'Revenue', value: '$2,100', icon: 'pi pi-dollar' },
	{ label: 'Customers', value: '28,441', icon: 'pi pi-users' },
	{ label: 'Comments', value: '152', icon: 'pi pi-comment' },
];

export interface RecentOrder {
	id: string;
	customer: string;
	total: string;
	status: 'success' | 'warn' | 'danger';
}

export const RECENT_ORDERS: RecentOrder[] = [
	{ id: 'ORD-1024', customer: 'Ada Lovelace', total: '$412.00', status: 'success' },
	{ id: 'ORD-1023', customer: 'Grace Hopper', total: '$128.50', status: 'warn' },
	{ id: 'ORD-1022', customer: 'Alan Turing', total: '$980.00', status: 'success' },
	{ id: 'ORD-1021', customer: 'Margaret Hamilton', total: '$76.25', status: 'danger' },
	{ id: 'ORD-1020', customer: 'Katherine Johnson', total: '$1,204.00', status: 'success' },
];
