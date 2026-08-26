import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective, CardComponent, TableComponent, TagComponent } from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { PRODUCTS, type Product } from './products.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Products',
	sourcePath: 'projects/showcase/src/app/pages/ecommerce/products',
	description: 'A product catalog table with stock levels, status tags and a create action.',
	elements: [
		{
			id: 'page-header',
			label: 'Page header',
			description: 'A title next to a "New Product" p-button that links to the create/edit form.',
			selectedByDefault: true,
		},
		{
			id: 'products-table',
			label: 'Products table',
			description:
				'A paginated p-table with Product / Category / Price / Stock / Status columns, status as a p-tag, and an edit p-button per row.',
			selectedByDefault: true,
		},
	],
};

/** wtag has no 'warn' severity — legacy PrimeNG 'warn' maps to ngx-ui 'warning'. */
const STATUS_TYPE: Record<Product['status'], 'success' | 'warning' | 'danger'> = {
	success: 'success',
	warn: 'warning',
	danger: 'danger',
};

@Component({
	selector: 'sc-products',
	imports: [ButtonDirective, CardComponent, TagComponent, TableComponent, RouterLink],
	templateUrl: './products.html',
	styleUrl: './products.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly products = PRODUCTS.map((product) => ({ ...product, tagType: STATUS_TYPE[product.status] }));

	protected readonly columns = [
		{ title: 'Product', field: 'name' },
		{ title: 'Category', field: 'category' },
		{ title: 'Price', field: 'price' },
		{ title: 'Stock', field: 'stock' },
		{ title: 'Status', field: 'statusLabel' },
	];

	protected readonly config = {
		perPage: 5,
		pageSizeOptions: [5, 10, 20],
		buttons: [
			{
				icon: 'edit',
				hrefFunc: () => ['/ecommerce/product-create-edit'],
			},
		],
	};

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
