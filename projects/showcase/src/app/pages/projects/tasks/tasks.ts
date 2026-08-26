import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderListModule } from '@wawjs/ngx-prime/orderlist';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { DONE_TASKS, IN_PROGRESS_TASKS, TODO_TASKS } from './tasks.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Project Tasks',
	sourcePath: 'projects/showcase/src/app/pages/projects/tasks',
	description: 'A Kanban-style To Do / In Progress / Done task board with drag-and-drop reordering.',
	elements: [
		{
			id: 'task-columns',
			label: 'Task columns',
			description:
				'Three draggable p-orderList columns (To Do, In Progress, Done), each listing task cards.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-tasks',
	imports: [FormsModule, OrderListModule],
	templateUrl: './tasks.html',
	styleUrl: './tasks.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tasks implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly todo = TODO_TASKS;
	protected readonly inProgress = IN_PROGRESS_TASKS;
	protected readonly done = DONE_TASKS;

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
