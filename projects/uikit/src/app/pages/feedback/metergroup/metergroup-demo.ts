import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MeterGroupComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-metergroup-demo',
	imports: [MeterGroupComponent],
	templateUrl: './metergroup-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeterGroupDemo {
	protected readonly storage = [
		{ label: 'Documents', color: '#34d399', value: 15 },
		{ label: 'Photos', color: '#fbbf24', value: 20 },
		{ label: 'Videos', color: '#60a5fa', value: 30 },
		{ label: 'Other', color: '#a78bfa', value: 10 },
	];
}
