import { ChangeDetectionStrategy, Component, OnDestroy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
	ButtonDirective,
	CardComponent,
	FileComponent,
	InputComponent,
	SelectComponent,
	ToggleComponent,
} from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';

interface RoleOption {
	label: string;
	value: string;
}

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Create / Edit User',
	sourcePath: 'projects/showcase/src/app/pages/users/create-edit',
	description: 'A form for creating or editing a user, with an avatar upload.',
	elements: [
		{
			id: 'form-fields',
			label: 'Name / Email / Role / Active fields',
			description:
				'A two-column grid with winput fields for Name and Email, a wselect for Role, and a wtoggle for Active.',
			selectedByDefault: true,
		},
		{
			id: 'avatar-upload',
			label: 'Avatar upload',
			description: 'A full-width ngx-file drag-and-drop area for a single image.',
			selectedByDefault: true,
		},
		{
			id: 'form-actions',
			label: 'Form actions',
			description: 'Cancel (outlined, secondary) and Save (primary) wbutton actions.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-user-create-edit',
	imports: [
		FormsModule,
		ButtonDirective,
		CardComponent,
		InputComponent,
		SelectComponent,
		FileComponent,
		ToggleComponent,
	],
	templateUrl: './user-create-edit.html',
	styleUrl: './user-create-edit.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateEdit implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly roles: RoleOption[] = [
		{ label: 'Admin', value: 'admin' },
		{ label: 'Editor', value: 'editor' },
		{ label: 'Viewer', value: 'viewer' },
	];

	protected readonly name = signal('');
	protected readonly email = signal('');
	protected readonly role = signal<string | null>(null);
	protected readonly active = signal(true);

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}

	protected onAvatarUpload(): void {
		// Demo-only handler — a real app would upload to its own API.
	}
}
