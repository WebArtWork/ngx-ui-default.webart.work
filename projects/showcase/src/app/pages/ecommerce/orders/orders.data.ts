export interface Order {
	id: string;
	customer: string;
	date: string;
	total: string;
	status: 'success' | 'warn' | 'danger' | 'info';
	statusLabel: string;
}

export const ORDERS: Order[] = [
	{ id: 'ORD-2041', customer: 'Ada Lovelace', date: '2026-08-20', total: '$412.00', status: 'success', statusLabel: 'Delivered' },
	{ id: 'ORD-2040', customer: 'Grace Hopper', date: '2026-08-19', total: '$128.50', status: 'warn', statusLabel: 'Pending' },
	{ id: 'ORD-2039', customer: 'Alan Turing', date: '2026-08-19', total: '$980.00', status: 'info', statusLabel: 'Shipped' },
	{ id: 'ORD-2038', customer: 'Margaret Hamilton', date: '2026-08-18', total: '$76.25', status: 'danger', statusLabel: 'Cancelled' },
	{ id: 'ORD-2037', customer: 'Katherine Johnson', date: '2026-08-17', total: '$1,204.00', status: 'success', statusLabel: 'Delivered' },
	{ id: 'ORD-2036', customer: 'Radia Perlman', date: '2026-08-17', total: '$59.00', status: 'info', statusLabel: 'Shipped' },
];
