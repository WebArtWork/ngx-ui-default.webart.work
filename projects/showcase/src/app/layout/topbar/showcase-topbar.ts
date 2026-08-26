import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, inject, output, signal } from '@angular/core';
import { ButtonDirective } from '@wawjs/ngx-ui';
import { PagePromptDialog } from '../../shared/page-prompt/page-prompt-dialog';
import { PagePromptService } from '../../shared/page-prompt/page-prompt.service';

const DARK_MODE_KEY = 'sc-dark-mode';

@Component({
	selector: 'sc-topbar',
	imports: [ButtonDirective, PagePromptDialog],
	templateUrl: './showcase-topbar.html',
	styleUrl: './showcase-topbar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseTopbar {
	protected readonly pagePromptService = inject(PagePromptService);

	private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	readonly menuToggle = output<void>();

	protected readonly dark = signal(this.isBrowser && localStorage.getItem(DARK_MODE_KEY) === 'true');
	protected readonly promptDialogVisible = signal(false);

	constructor() {
		if (this.isBrowser) {
			document.documentElement.classList.toggle('app-dark', this.dark());
		}
	}

	protected toggleDarkMode(): void {
		this.dark.update((value) => !value);

		if (this.isBrowser) {
			document.documentElement.classList.toggle('app-dark', this.dark());
			localStorage.setItem(DARK_MODE_KEY, String(this.dark()));
		}
	}

	protected openPagePrompt(): void {
		this.promptDialogVisible.set(true);
	}
}
