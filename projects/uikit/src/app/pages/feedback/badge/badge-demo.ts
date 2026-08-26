import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-badge-demo',
	imports: [BadgeComponent],
	templateUrl: './badge-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeDemo {
	protected readonly types = [
		'success',
		'info',
		'warning',
		'danger',
		'secondary',
		'dark',
	] as const;
}
