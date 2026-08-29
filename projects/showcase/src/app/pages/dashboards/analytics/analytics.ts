import { Component, OnDestroy, inject } from '@angular/core';
import { CardComponent, ChartComponent, MeterGroupComponent, ProgressBarComponent } from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { GOAL_METERS, KPI_STATS, REVENUE_TREND } from './analytics.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Analytics Dashboard',
	sourcePath: 'projects/showcase/src/app/pages/dashboards/analytics',
	description:
		'An analytics dashboard combining KPI cards, a revenue trend chart and a set of goal meters.',
	elements: [
		{
			id: 'kpi-cards',
			label: 'KPI cards row',
			description:
				'A responsive row of wcard tiles, each with an icon, a value, a label and a trend change indicator.',
			selectedByDefault: true,
		},
		{
			id: 'revenue-chart',
			label: 'Revenue Trend chart',
			description: 'A wcard titled "Revenue Trend" containing a wchart line chart.',
			selectedByDefault: true,
		},
		{
			id: 'goal-meters',
			label: 'Goals meter group',
			description:
				'A wcard titled "Goals" containing a wmetergroup summary plus a per-goal list of wprogressbar rows.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-analytics',
	imports: [CardComponent, ChartComponent, MeterGroupComponent, ProgressBarComponent],
	templateUrl: './analytics.html',
	styleUrl: './analytics.scss',
})
export class Analytics implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly kpis = KPI_STATS;
	protected readonly revenueTrend = REVENUE_TREND;
	protected readonly goalMeters = GOAL_METERS;
	protected readonly meterValues = GOAL_METERS.map((meter) => ({
		label: meter.label,
		value: meter.value,
		color: meter.color,
	}));
	protected readonly chartOptions = {
		plugins: { legend: { display: false } },
		maintainAspectRatio: false,
	};

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
