import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import type { BreadcrumbItem } from '@wawjs/ngx-ui';
import { BreadcrumbComponent, CardComponent, FileComponent, TableComponent } from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { FILE_ROWS } from './files.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Files',
	sourcePath: 'projects/showcase/src/app/pages/applications/files',
	description: 'A file browser with breadcrumb navigation, an upload control and a files table.',
	elements: [
		{
			id: 'breadcrumb',
			label: 'Breadcrumb',
			description: 'A p-breadcrumb showing the current folder path with a home icon.',
			selectedByDefault: true,
		},
		{
			id: 'upload-button',
			label: 'Upload button',
			description: 'A basic-mode p-fileUpload button for adding files.',
			selectedByDefault: true,
		},
		{
			id: 'files-table',
			label: 'Files table',
			description: 'A p-table with Name (with a type icon), Size and Modified columns.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-files',
	imports: [BreadcrumbComponent, CardComponent, TableComponent, FileComponent],
	templateUrl: './files.html',
	styleUrl: './files.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Files implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly files = FILE_ROWS;
	protected readonly filesColumns = [
		{ title: 'Name', field: 'name' },
		{ title: 'Size', field: 'size' },
		{ title: 'Modified', field: 'modified' },
	];
	// wbreadcrumb renders its own home link (via [homeIcon]) ahead of `items` —
	// there is no per-item "home" concept like PrimeNG's `home` MenuItem input.
	protected readonly breadcrumbItems: BreadcrumbItem[] = [{ label: 'Documents' }];

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}

	protected onUpload(uploadedFiles: File[]): void {
		// ngx-file is local-only (it just collects `File` objects client-side,
		// unlike PrimeNG's p-fileUpload which posted to `url`) — a real app
		// would send `uploadedFiles` to its own API here.
	}
}
