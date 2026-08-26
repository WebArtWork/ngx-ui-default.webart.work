import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuComponent, type MenuItem } from '@wawjs/ngx-ui';

@Component({
	selector: 'sc-sidebar',
	imports: [MenuComponent],
	templateUrl: './showcase-sidebar.html',
	styleUrl: './showcase-sidebar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseSidebar {
	protected readonly items: MenuItem[] = [
		{ label: 'Landing', icon: 'public', routerLink: ['/'] },
		{
			label: 'Dashboards',
			icon: 'home',
			items: [
				{ label: 'Default', routerLink: ['/dashboards/default'] },
				{ label: 'Analytics', routerLink: ['/dashboards/analytics'] },
			],
		},
		{
			label: 'Users',
			icon: 'group',
			items: [
				{ label: 'List', routerLink: ['/users/list'] },
				{ label: 'Profile', routerLink: ['/users/profile'] },
				{ label: 'Create / Edit', routerLink: ['/users/create-edit'] },
			],
		},
		{
			label: 'Ecommerce',
			icon: 'shopping_cart',
			items: [
				{ label: 'Products', routerLink: ['/ecommerce/products'] },
				{ label: 'Create / Edit Product', routerLink: ['/ecommerce/product-create-edit'] },
				{ label: 'Orders', routerLink: ['/ecommerce/orders'] },
				{ label: 'Order Details', routerLink: ['/ecommerce/order-details'] },
			],
		},
		{
			label: 'Projects',
			icon: 'folder',
			items: [
				{ label: 'List', routerLink: ['/projects/list'] },
				{ label: 'Project Details', routerLink: ['/projects/project-details'] },
				{ label: 'Tasks', routerLink: ['/projects/tasks'] },
			],
		},
		{
			label: 'Applications',
			icon: 'grid_view',
			items: [
				{ label: 'Calendar', routerLink: ['/applications/calendar'] },
				{ label: 'Chat', routerLink: ['/applications/chat'] },
				{ label: 'Files', routerLink: ['/applications/files'] },
			],
		},
		{
			label: 'Account',
			icon: 'settings',
			items: [{ label: 'Settings', routerLink: ['/account/settings'] }],
		},
	];
}
