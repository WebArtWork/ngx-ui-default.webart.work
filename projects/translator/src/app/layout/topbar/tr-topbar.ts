import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonDirective, SelectComponent, TooltipDirective } from '@wawjs/ngx-ui';
import { TranslationsState } from '../../translations/translations.state';

const DARK_MODE_STORAGE_KEY = 'translator-dark-mode';

@Component({
	selector: 'tr-topbar',
	imports: [ButtonDirective, FormsModule, SelectComponent, TooltipDirective],
	templateUrl: './tr-topbar.html',
	styleUrl: './tr-topbar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrTopbar {
	protected readonly translationsState = inject(TranslationsState);

	private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	protected readonly dark = signal(this.isBrowser && this.readInitialDarkMode());

	constructor() {
		if (this.isBrowser) {
			document.documentElement.classList.toggle('app-dark', this.dark());
		}
	}

	protected toggleDarkMode(): void {
		this.dark.update((value) => !value);

		if (this.isBrowser) {
			document.documentElement.classList.toggle('app-dark', this.dark());
			localStorage.setItem(DARK_MODE_STORAGE_KEY, String(this.dark()));
		}
	}

	protected downloadSelectedLanguage(): void {
		this.translationsState.downloadLanguage(this.translationsState.selectedLanguage());
	}

	protected canDownloadSelected(): boolean {
		return !this.translationsState.isDefaultLanguageSelected() && this.translationsState.modifiedCount() > 0;
	}

	protected onLanguageChange(value: unknown): void {
		if (typeof value === 'string') {
			this.translationsState.selectedLanguage.set(value);
		}
	}

	private readInitialDarkMode(): boolean {
		const stored = localStorage.getItem(DARK_MODE_STORAGE_KEY);
		if (stored !== null) {
			return stored === 'true';
		}
		return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
	}
}
