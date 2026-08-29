import { Component } from '@angular/core';
import { CellDirective, TableComponent, TagComponent, TagType } from '@wawjs/ngx-ui';

interface Product {
	code: string;
	name: string;
	category: string;
	price: number;
	status: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
}

@Component({
	selector: 'uk-table-demo',
	imports: [TableComponent, CellDirective, TagComponent],
	templateUrl: './table-demo.html',
})
export class TableDemo {
	protected readonly products: Product[] = [
		{ code: 'P001', name: 'Desk Lamp', category: 'Home', price: 29.99, status: 'INSTOCK' },
		{ code: 'P002', name: 'Mechanical Keyboard', category: 'Electronics', price: 89.5, status: 'LOWSTOCK' },
		{ code: 'P003', name: 'Standing Mat', category: 'Office', price: 45, status: 'OUTOFSTOCK' },
		{ code: 'P004', name: 'Monitor Stand', category: 'Office', price: 39.99, status: 'INSTOCK' },
	];

	protected readonly columns = [
		{ title: 'Code', field: 'code' },
		{ title: 'Name', field: 'name' },
		{ title: 'Category', field: 'category' },
		{ title: 'Price', field: 'price' },
		{ title: 'Status', field: 'status' },
	];

	protected readonly nameColumns = [
		{ title: 'Name', field: 'name' },
		{ title: 'Price', field: 'price' },
	];

	protected type(status: Product['status']): TagType {
		if (status === 'INSTOCK') return 'success';
		if (status === 'LOWSTOCK') return 'warning';
		return 'danger';
	}
}
