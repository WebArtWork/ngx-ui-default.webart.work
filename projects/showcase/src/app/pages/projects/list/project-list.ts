import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent, ProgressBarComponent, TagComponent } from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { PROJECT_SUMMARIES } from './project-list.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Projects List',
	sourcePath: 'projects/showcase/src/app/pages/projects/list',
	description: 'A grid of project summary cards, each linking to its project details page.',
	elements: [
		{
			id: 'project-cards',
			label: 'Project cards grid',
			description:
				'A responsive grid of clickable p-card tiles, each with a name, status p-tag, client, a p-progressBar and a due date.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-project-list',
	imports: [CardComponent, ProgressBarComponent, TagComponent, RouterLink],
	templateUrl: './project-list.html',
	styleUrl: './project-list.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectList implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly projects = PROJECT_SUMMARIES;

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
