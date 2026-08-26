import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { OrderListComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-orderlist-demo',
	imports: [OrderListComponent],
	templateUrl: './orderlist-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderListDemo {
	protected readonly products = signal([
		{ id: '1', name: 'Bamboo Watch' },
		{ id: '2', name: 'Black Watch' },
		{ id: '3', name: 'Blue Band' },
		{ id: '4', name: 'Blue T-Shirt' },
		{ id: '5', name: 'Bracelet' },
	]);
}
