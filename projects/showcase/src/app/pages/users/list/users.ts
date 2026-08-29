import { Component, OnDestroy, inject } from '@angular/core';
import { CellDirective, TableComponent, TagComponent } from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { USERS } from './users.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Users List',
	sourcePath: 'projects/showcase/src/app/pages/users/list',
	description: 'A searchable, sortable, paginated table of users.',
	elements: [
		{
			id: 'search-toolbar',
			label: 'Search toolbar',
			description: 'The built-in wtable search box that filters the table globally.',
			selectedByDefault: true,
		},
		{
			id: 'users-table',
			label: 'Users table',
			description: 'A paginated wtable with sortable Name and Role columns, plus Email and a Status wtag column.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-users',
	imports: [TableComponent, CellDirective, TagComponent],
	templateUrl: './users.html',
	styleUrl: './users.scss',
})
export class Users implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly users = USERS;

	protected readonly columns = [
		{ title: 'Name', field: 'name' },
		{ title: 'Email', field: 'email' },
		{ title: 'Role', field: 'role' },
		{ title: 'Status', field: 'status' },
	];

	protected readonly config = {
		searchable: true,
		searchBy: 'name',
		allDocs: true,
		perPage: 5,
	};

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
