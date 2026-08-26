import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItem } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-breadcrumb-demo',
	imports: [BreadcrumbComponent],
	templateUrl: './breadcrumb-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbDemo {
	protected readonly items: BreadcrumbItem[] = [
		{ label: 'Components' },
		{ label: 'Form' },
		{ label: 'InputText' },
	];
}
