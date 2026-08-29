import { Component, OnDestroy, inject } from '@angular/core';
import { AvatarComponent, CardComponent, DividerComponent, TagComponent } from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { PROFILE_STATS, PROFILE_TAGS } from './profile.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'User Profile',
	sourcePath: 'projects/showcase/src/app/pages/users/profile',
	description: "A user's profile card with an avatar, stats and tags.",
	elements: [
		{
			id: 'profile-header',
			label: 'Profile header',
			description: 'A wavatar next to a name and title/subtitle.',
			selectedByDefault: true,
		},
		{
			id: 'profile-stats',
			label: 'Stats row',
			description: 'A row of value/label stat pairs, separated from the header by a wdivider.',
			selectedByDefault: true,
		},
		{
			id: 'profile-tags',
			label: 'Tags row',
			description: 'A row of secondary-severity wtag chips, separated by a wdivider.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-profile',
	imports: [CardComponent, AvatarComponent, DividerComponent, TagComponent],
	templateUrl: './profile.html',
	styleUrl: './profile.scss',
})
export class Profile implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly stats = PROFILE_STATS;
	protected readonly tags = PROFILE_TAGS;

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
