import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuComponent, MenuItem } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-menu-demo',
	imports: [MenuComponent],
	templateUrl: './menu-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDemo {
	protected readonly items: MenuItem[] = [
		{ label: 'New', icon: 'add' },
		{ label: 'Search', icon: 'search' },
		{ label: '', separator: true },
		{ label: 'Delete', icon: 'delete' },
	];
}
