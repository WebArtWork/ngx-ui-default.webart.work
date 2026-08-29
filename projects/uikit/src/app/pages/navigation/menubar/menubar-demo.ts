import { Component } from '@angular/core';
import { MenuItem, MenubarComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-menubar-demo',
	imports: [MenubarComponent],
	templateUrl: './menubar-demo.html',
})
export class MenubarDemo {
	protected readonly items: MenuItem[] = [
		{ label: 'Home', icon: 'home' },
		{
			label: 'Products',
			icon: 'star',
			items: [
				{ label: 'Components', icon: 'bolt' },
				{ label: 'Blocks', icon: 'dns' },
			],
		},
		{ label: 'Contact', icon: 'mail' },
	];
}
