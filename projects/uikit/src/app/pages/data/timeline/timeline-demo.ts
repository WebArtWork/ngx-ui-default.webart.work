import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimelineComponent, TimelineItem } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-timeline-demo',
	imports: [TimelineComponent],
	templateUrl: './timeline-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineDemo {
	protected readonly events: TimelineItem[] = [
		{ label: 'Ordered', date: '15/10/2023 10:30', icon: 'shopping_cart', color: '#9C27B0' },
		{ label: 'Processing', date: '15/10/2023 14:00', icon: 'settings', color: '#673AB7' },
		{ label: 'Shipped', date: '15/10/2023 16:15', icon: 'local_shipping', color: '#FF9800' },
		{ label: 'Delivered', date: '16/10/2023 10:00', icon: 'check', color: '#607D8B' },
	];
}
