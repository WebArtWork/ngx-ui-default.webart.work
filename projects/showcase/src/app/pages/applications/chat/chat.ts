import { Component, OnDestroy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarComponent, ButtonDirective, CardComponent, InputComponent } from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { CHAT_CONTACTS, CHAT_MESSAGES, type ChatMessage } from './chat.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Chat',
	sourcePath: 'projects/showcase/src/app/pages/applications/chat',
	description:
		'A contact list next to a conversation panel, composing p-avatar initials with custom message bubbles.',
	elements: [
		{
			id: 'contact-list',
			label: 'Contact list',
			description:
				'A p-card listing contacts, each with a p-avatar (initials), name and last message preview; clicking selects the active conversation.',
			selectedByDefault: true,
		},
		{
			id: 'conversation-panel',
			label: 'Conversation panel',
			description:
				'A message thread with left/right-aligned bubbles for the two participants, plus a pInputText composer with a send p-button.',
			selectedByDefault: true,
		},
	],
};

/**
 * No ready-made chat component in ngx-ui — this composes `wavatar` (as
 * initials) with custom message bubbles and `winput`, the same building
 * blocks a real chat UI would use.
 */
@Component({
	selector: 'sc-chat',
	imports: [FormsModule, AvatarComponent, ButtonDirective, CardComponent, InputComponent],
	templateUrl: './chat.html',
	styleUrl: './chat.scss',
})
export class Chat implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly contacts = CHAT_CONTACTS;
	protected readonly activeContactId = signal(CHAT_CONTACTS[0]?.id);
	protected readonly messages = signal<ChatMessage[]>(CHAT_MESSAGES);
	protected readonly draft = signal('');

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}

	protected selectContact(id: string): void {
		this.activeContactId.set(id);
	}

	protected send(): void {
		const text = this.draft().trim();
		if (!text) return;
		this.messages.update((messages) => [
			...messages,
			{ from: 'me', text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
		]);
		this.draft.set('');
	}
}
