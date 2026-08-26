export interface Product {
	id: string;
	name: string;
	category: string;
	price: string;
	stock: number;
	status: 'success' | 'warn' | 'danger';
	statusLabel: string;
}

export const PRODUCTS: Product[] = [
	{ id: 'P-1001', name: 'Wireless Headphones', category: 'Audio', price: '$89.00', stock: 142, status: 'success', statusLabel: 'In Stock' },
	{ id: 'P-1002', name: 'Mechanical Keyboard', category: 'Accessories', price: '$129.00', stock: 8, status: 'warn', statusLabel: 'Low Stock' },
	{ id: 'P-1003', name: '4K Monitor', category: 'Displays', price: '$399.00', stock: 0, status: 'danger', statusLabel: 'Out of Stock' },
	{ id: 'P-1004', name: 'USB-C Hub', category: 'Accessories', price: '$45.00', stock: 76, status: 'success', statusLabel: 'In Stock' },
	{ id: 'P-1005', name: 'Webcam 1080p', category: 'Video', price: '$59.00', stock: 21, status: 'success', statusLabel: 'In Stock' },
	{ id: 'P-1006', name: 'Standing Desk', category: 'Furniture', price: '$349.00', stock: 3, status: 'warn', statusLabel: 'Low Stock' },
];
