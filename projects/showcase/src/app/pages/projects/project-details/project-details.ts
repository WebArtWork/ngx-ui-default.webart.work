import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import {
	CardComponent,
	TableComponent,
	TabPanelComponent,
	TabsComponent,
	TagComponent,
	TimelineComponent,
} from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { PROJECT_ACTIVITY, PROJECT_TASK_ROWS } from './project-details.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Project Details',
	sourcePath: 'projects/showcase/src/app/pages/projects/project-details',
	description: 'A single project overview with tabbed Activity and Tasks views.',
	elements: [
		{
			id: 'activity-tab',
			label: 'Activity tab',
			description: 'A p-timeline of project activity events, shown in the first p-tabpanel.',
			selectedByDefault: true,
		},
		{
			id: 'tasks-tab',
			label: 'Tasks tab',
			description:
				'A p-table with Task / Assignee / Status columns (status as a p-tag), shown in the second p-tabpanel.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-project-details',
	imports: [CardComponent, TabsComponent, TabPanelComponent, TimelineComponent, TableComponent, TagComponent],
	templateUrl: './project-details.html',
	styleUrl: './project-details.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetails implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly activity = PROJECT_ACTIVITY.map((event) => ({
		label: event.status,
		date: event.date,
		icon: event.icon,
		color: event.color,
	}));
	protected readonly tasks = PROJECT_TASK_ROWS;
	protected readonly taskColumns = [
		{ title: 'Task', field: 'task' },
		{ title: 'Assignee', field: 'assignee' },
		{ title: 'Status', field: 'status' },
	];
	protected readonly taskTableConfig = { allDocs: false, searchable: false };

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
