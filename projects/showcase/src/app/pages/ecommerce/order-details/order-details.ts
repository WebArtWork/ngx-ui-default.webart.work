import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { CardComponent, TableComponent, TimelineComponent } from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { ORDER_CUSTOMER, ORDER_LINE_ITEMS, ORDER_STATUS_EVENTS } from './order-details.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Order Details',
	sourcePath: 'projects/showcase/src/app/pages/ecommerce/order-details',
	description: 'A single order: a status timeline and customer info side by side, plus a line items table.',
	elements: [
		{
			id: 'status-timeline',
			label: 'Status timeline',
			description: 'A p-card titled "Status" containing a p-timeline of order status events.',
			selectedByDefault: true,
		},
		{
			id: 'customer-card',
			label: 'Customer card',
			description: 'A p-card titled "Customer" with the customer name, email and address.',
			selectedByDefault: true,
		},
		{
			id: 'line-items-table',
			label: 'Line items table',
			description:
				'A p-card titled "Line Items" containing a p-table with Product / Quantity / Price / Total columns.',
			selectedByDefault: true,
		},
	],
};

/** Best-fit mapping from legacy PrimeIcons (`pi pi-xxx`) to Material Symbols ligature names. */
const PRIME_ICON_TO_MATERIAL: Record<string, string> = {
	'pi pi-shopping-cart': 'shopping_cart',
	'pi pi-wallet': 'account_balance_wallet',
	'pi pi-send': 'send',
	'pi pi-car': 'directions_car',
	'pi pi-check-circle': 'check_circle',
};

@Component({
	selector: 'sc-order-details',
	imports: [CardComponent, TableComponent, TimelineComponent],
	templateUrl: './order-details.html',
	styleUrl: './order-details.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetails implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly timelineItems = ORDER_STATUS_EVENTS.map((event) => ({
		label: event.status,
		date: event.date,
		icon: PRIME_ICON_TO_MATERIAL[event.icon] ?? 'circle',
		color: event.color,
	}));
	protected readonly lineItems = ORDER_LINE_ITEMS;
	protected readonly customer = ORDER_CUSTOMER;

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
