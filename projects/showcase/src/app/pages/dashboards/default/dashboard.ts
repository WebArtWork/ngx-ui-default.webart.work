import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { CardComponent, CellDirective, TableComponent, TagComponent } from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { DASHBOARD_STATS, RECENT_ORDERS } from './dashboard.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Default Dashboard',
	sourcePath: 'projects/showcase/src/app/pages/dashboards/default',
	description:
		'An overview dashboard combining a row of summary stat cards with a recent activity table below.',
	elements: [
		{
			id: 'stat-cards',
			label: 'Stat cards row',
			description:
				'A responsive row of wcard summary tiles, each with an icon, a large value and a label.',
			selectedByDefault: true,
		},
		{
			id: 'orders-table',
			label: 'Recent Orders table',
			description:
				'A wcard titled "Recent Orders" containing a wtable with Order / Customer / Total / Status columns, status rendered as a wtag.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-dashboard',
	imports: [CardComponent, CellDirective, TableComponent, TagComponent],
	templateUrl: './dashboard.html',
	styleUrl: './dashboard.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly stats = DASHBOARD_STATS;
	protected readonly orders = RECENT_ORDERS;

	protected readonly columns = [
		{ title: 'Order', field: 'id' },
		{ title: 'Customer', field: 'customer' },
		{ title: 'Total', field: 'total' },
		{ title: 'Status', field: 'status' },
	];

	protected readonly tableConfig = {};

	protected tagType(status: string): 'success' | 'warning' | 'danger' {
		return status === 'warn' ? 'warning' : (status as 'success' | 'danger');
	}

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
