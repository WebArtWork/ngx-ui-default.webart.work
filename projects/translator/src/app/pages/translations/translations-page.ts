import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
	ButtonDirective,
	CellDirective,
	InputComponent,
	TableComponent,
	TagComponent,
	ToggleComponent,
} from '@wawjs/ngx-ui';
import { TranslationRow, TranslationsState } from '../../translations/translations.state';

@Component({
	selector: 'tr-translations-page',
	imports: [
		FormsModule,
		ButtonDirective,
		InputComponent,
		TagComponent,
		ToggleComponent,
		TableComponent,
		CellDirective,
	],
	templateUrl: './translations-page.html',
})
export class TranslationsPage {
	protected readonly translationsState = inject(TranslationsState);

	protected readonly filterText = signal('');
	protected readonly onlyIssues = signal(false);
	protected readonly onlyModified = signal(false);

	protected filteredRows(): TranslationRow[] {
		const term = this.filterText().trim().toLowerCase();
		const onlyIssues = this.onlyIssues();
		const onlyModified = this.onlyModified();
		const lang = this.translationsState.selectedLanguage();
		return this.translationsState.rows().filter((row) => {
			if (onlyIssues && !row.missing.includes(lang) && !row.untranslated.includes(lang)) return false;
			if (onlyModified && !this.translationsState.isRowModified(row)) return false;
			if (!term) return true;
			return row.key.toLowerCase().includes(term) || (row.values[lang] ?? '').toLowerCase().includes(term);
		});
	}

	protected setValue(row: TranslationRow, langCode: string, value: unknown): void {
		if (typeof value === 'string') {
			this.translationsState.setValue(row, langCode, value);
		}
	}

	protected reset(): void {
		this.translationsState.reset();
	}

	protected selectedLanguageName(): string {
		const code = this.translationsState.selectedLanguage();
		return this.translationsState.languages.find((lang) => lang.code === code)?.name ?? code;
	}

	protected tableColumns(): { title: string; field: string }[] {
		const columns = [
			{ title: '#', field: 'index' },
			{ title: 'English (key)', field: 'key' },
		];
		if (!this.translationsState.isDefaultLanguageSelected()) {
			columns.push({ title: this.selectedLanguageName(), field: 'value' });
		}
		return columns;
	}
}
