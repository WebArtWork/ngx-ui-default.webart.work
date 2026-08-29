import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent, TableComponent, TagComponent } from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { ORDERS, type Order } from './orders.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Orders',
	sourcePath: 'projects/showcase/src/app/pages/ecommerce/orders',
	description: 'A searchable, sortable, paginated table of orders with a view-details action.',
	elements: [
		{
			id: 'search-toolbar',
			label: 'Search toolbar',
			description: 'A p-iconfield with a search icon and a text input that filters the table globally.',
			selectedByDefault: true,
		},
		{
			id: 'orders-table',
			label: 'Orders table',
			description:
				'A paginated p-table with Order / Customer / Total / Status columns, status as a p-tag, and a view p-button per row linking to order details.',
			selectedByDefault: true,
		},
	],
};

/** wtag has no 'warn' severity — legacy PrimeNG 'warn' maps to ngx-ui 'warning'. */
const STATUS_TYPE: Record<Order['status'], 'success' | 'warning' | 'danger' | 'info'> = {
	success: 'success',
	warn: 'warning',
	danger: 'danger',
	info: 'info',
};

@Component({
	selector: 'sc-orders',
	imports: [TableComponent, TagComponent, CardComponent, RouterLink],
	templateUrl: './orders.html',
	styleUrl: './orders.scss',
})
export class Orders implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	private readonly allOrders = ORDERS.map((order) => ({ ...order, tagType: STATUS_TYPE[order.status] }));
	private readonly searchTerm = signal('');

	protected readonly orders = computed(() => {
		const term = this.searchTerm().trim().toLowerCase();
		if (!term) return this.allOrders;
		return this.allOrders.filter(
			(order) =>
				order.id.toLowerCase().includes(term) ||
				order.customer.toLowerCase().includes(term) ||
				order.statusLabel.toLowerCase().includes(term),
		);
	});

	protected readonly columns = [
		{ title: 'Order', field: 'id' },
		{ title: 'Customer', field: 'customer' },
		{ title: 'Date', field: 'date' },
		{ title: 'Total', field: 'total' },
		{ title: 'Status', field: 'statusLabel' },
	];

	protected readonly config = {
		searchable: true,
		globalSearch: true,
		perPage: 5,
		pageSizeOptions: [5, 10, 20],
		buttons: [
			{
				icon: 'visibility',
				hrefFunc: () => ['/ecommerce/order-details'],
			},
		],
	};

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}

	protected onSearch(value: string): void {
		this.searchTerm.set(value);
	}
}
