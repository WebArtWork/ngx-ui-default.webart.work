import { Component } from '@angular/core';
import { ButtonDirective, CardComponent, TimelineComponent, TimelineItem } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-timeline-composite-demo',
	imports: [ButtonDirective, CardComponent, TimelineComponent],
	templateUrl: './timeline-composite-demo.html',
})
export class TimelineCompositeDemo {
	protected readonly events: TimelineItem[] = [
		{
			label: 'Order Placed',
			date: 'Oct 15, 2023 — 10:30',
			icon: 'shopping_cart',
			color: '#60a5fa',
			content: 'Your order #10234 has been placed successfully.',
		},
		{
			label: 'Processing',
			date: 'Oct 15, 2023 — 14:00',
			icon: 'settings',
			color: '#a78bfa',
			content: 'Your order is being prepared for shipment.',
		},
		{
			label: 'Shipped',
			date: 'Oct 16, 2023 — 09:15',
			icon: 'local_shipping',
			color: '#fbbf24',
			content: 'Package handed to the carrier, tracking available.',
		},
		{
			label: 'Delivered',
			date: 'Oct 17, 2023 — 16:45',
			icon: 'check',
			color: '#4ade80',
			content: 'Delivered and signed for at the front desk.',
		},
	];
}
