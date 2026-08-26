export interface OrderStatusEvent {
	status: string;
	date: string;
	icon: string;
	color: string;
}

export const ORDER_STATUS_EVENTS: OrderStatusEvent[] = [
	{ status: 'Order Placed', date: 'Aug 17, 2026 - 09:12', icon: 'pi pi-shopping-cart', color: '#60a5fa' },
	{ status: 'Payment Confirmed', date: 'Aug 17, 2026 - 09:14', icon: 'pi pi-wallet', color: '#4ade80' },
	{ status: 'Shipped', date: 'Aug 18, 2026 - 14:02', icon: 'pi pi-send', color: '#a78bfa' },
	{ status: 'Out for Delivery', date: 'Aug 19, 2026 - 08:30', icon: 'pi pi-car', color: '#facc15' },
	{ status: 'Delivered', date: 'Aug 19, 2026 - 15:47', icon: 'pi pi-check-circle', color: '#22c55e' },
];

export interface OrderLineItem {
	product: string;
	quantity: number;
	price: string;
	total: string;
}

export const ORDER_LINE_ITEMS: OrderLineItem[] = [
	{ product: 'Wireless Headphones', quantity: 1, price: '$89.00', total: '$89.00' },
	{ product: 'USB-C Hub', quantity: 2, price: '$45.00', total: '$90.00' },
	{ product: 'Webcam 1080p', quantity: 1, price: '$59.00', total: '$59.00' },
];

export const ORDER_CUSTOMER = {
	name: 'Katherine Johnson',
	email: 'katherine.johnson@example.com',
	address: '1234 Analytical Way, Hampton, VA 23666',
};
