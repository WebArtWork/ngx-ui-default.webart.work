import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent, InputComponent, TagComponent } from '@wawjs/ngx-ui';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { CALENDAR_EVENTS } from './calendar.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Calendar',
	sourcePath: 'projects/showcase/src/app/pages/applications/calendar',
	description:
		'An event calendar composing an inline p-datePicker with a plain events list keyed by ISO date.',
	elements: [
		{
			id: 'date-picker',
			label: 'Inline date picker',
			description: 'A p-card containing an inline p-datePicker for choosing a day.',
			selectedByDefault: true,
		},
		{
			id: 'events-list',
			label: 'Events list',
			description:
				'A p-card titled "Events" listing the events for the selected day, each with a time p-tag and a title.',
			selectedByDefault: true,
		},
	],
};

/**
 * No ready-made "calendar app" component exists in ngx-ui — this composes
 * `winput` (native `type="date"`) with a plain event list keyed by ISO date,
 * which is the same building block a real scheduling UI would use.
 *
 * NOTE: ngx-ui's `winput` date type is a plain native date input, not an
 * inline calendar popup like PrimeNG's `p-datePicker` — this is an accepted
 * UX difference from the migration reference.
 */
@Component({
	selector: 'sc-calendar',
	imports: [FormsModule, CardComponent, InputComponent, TagComponent],
	templateUrl: './calendar.html',
	styleUrl: './calendar.scss',
})
export class CalendarPage implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly selectedDate = signal('2026-08-25');

	protected readonly eventsForSelectedDate = computed(() => {
		const iso = this.selectedDate();
		return CALENDAR_EVENTS.filter((event) => event.date === iso);
	});

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
