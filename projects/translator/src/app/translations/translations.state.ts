import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * A translation source language ("en") is an array of source-text strings,
 * each string doubling as the translation *key* used by `TranslateService`
 * (see `src/app/**` calls like `translateService.translate('Settings')`).
 * Every other language file (e.g. "ua") is a same-length array, positionally
 * aligned to the default language's array — index N in `ua.json` is the
 * translation of index N in `en.json`. There is no dictionary/object form in
 * this repo's actual `src/i18n/*.json` files.
 */
export interface TranslationRow {
	index: number;
	key: string; // the default-language (en) source text — also the lookup key
	values: Record<string, string>; // languageCode -> text, always includes 'en'
	missing: string[]; // language codes where this index doesn't exist in that file
	untranslated: string[]; // language codes where the value still equals the en source text
}

/** Matches `src/environments/environment.prod.ts` (`defaultLanguageCode` + `languages`). */
const DEFAULT_LANGUAGE = 'en';
const LANGUAGES = [
	{ code: 'cs', name: 'Czech' },
	{ code: 'de', name: 'German' },
	{ code: 'el', name: 'Greek' },
	{ code: 'en', name: 'English' },
	{ code: 'es', name: 'Spanish' },
	{ code: 'fr', name: 'French' },
	{ code: 'hu', name: 'Hungarian' },
	{ code: 'it', name: 'Italian' },
	{ code: 'nl', name: 'Dutch' },
	{ code: 'pl', name: 'Polish' },
	{ code: 'pt', name: 'Portuguese' },
	{ code: 'ro', name: 'Romanian' },
	{ code: 'sv', name: 'Swedish' },
	{ code: 'ua', name: 'Ukrainian' },
];

@Injectable({ providedIn: 'root' })
export class TranslationsState {
	private readonly http = inject(HttpClient);

	readonly languages = LANGUAGES;
	readonly otherLanguages = LANGUAGES.filter((lang) => lang.code !== DEFAULT_LANGUAGE);
	readonly defaultLanguage = DEFAULT_LANGUAGE;

	readonly loading = signal(true);
	readonly loadError = signal<string | undefined>(undefined);
	readonly rows = signal<TranslationRow[]>([]);
	readonly dirty = signal(false);

	/** Which language's column is shown in the table / offered for download. */
	readonly selectedLanguage = signal(this.otherLanguages[0]?.code ?? DEFAULT_LANGUAGE);

	/** Snapshot of the values as loaded, so edits can be told apart and reset. */
	private originalRows: TranslationRow[] = [];

	constructor() {
		this.load();
	}

	private async load(): Promise<void> {
		this.loading.set(true);
		this.loadError.set(undefined);
		try {
			const byLanguage: Record<string, string[]> = {};
			for (const lang of this.languages) {
				byLanguage[lang.code] = (await this.http
					.get<string[]>(`/i18n/${lang.code}.json`)
					.toPromise()) as string[];
			}
			const defaultArray = byLanguage[DEFAULT_LANGUAGE] ?? [];
			const rows: TranslationRow[] = defaultArray.map((key, index) => {
				const values: Record<string, string> = { [DEFAULT_LANGUAGE]: key };
				const missing: string[] = [];
				const untranslated: string[] = [];
				for (const lang of this.otherLanguages) {
					const arr = byLanguage[lang.code] ?? [];
					if (index >= arr.length) {
						missing.push(lang.code);
						values[lang.code] = '';
					} else {
						values[lang.code] = arr[index];
						if (arr[index] === key) untranslated.push(lang.code);
					}
				}
				return { index, key, values, missing, untranslated };
			});
			this.rows.set(rows);
			this.originalRows = rows.map((row) => ({ ...row, values: { ...row.values } }));
		} catch (err) {
			this.loadError.set(
				'Could not load /i18n/en.json and /i18n/ua.json. Make sure `ng serve translator` (or the ' +
					'build) can see the root src/i18n/*.json files — see projects/translator/angular.json ' +
					'asset config.',
			);
			console.error(err);
		} finally {
			this.loading.set(false);
		}
	}

	setValue(row: TranslationRow, langCode: string, value: string): void {
		this.rows.update((rows) =>
			rows.map((candidate) => {
				if (candidate.index !== row.index) return candidate;
				const values = { ...candidate.values, [langCode]: value };
				const untranslated = this.otherLanguages
					.map((lang) => lang.code)
					.filter((code) => values[code] === values[DEFAULT_LANGUAGE]);
				const missing = candidate.missing.filter((code) => code !== langCode);
				return { ...candidate, values, untranslated, missing };
			}),
		);
		this.dirty.set(true);
	}

	isDefaultLanguageSelected(): boolean {
		return this.selectedLanguage() === DEFAULT_LANGUAGE;
	}

	/** Missing/untranslated count for whichever language is currently selected. */
	issueCount(): number {
		const lang = this.selectedLanguage();
		if (lang === DEFAULT_LANGUAGE) return 0;
		return this.rows().filter((row) => row.missing.includes(lang) || row.untranslated.includes(lang))
			.length;
	}

	isRowModified(row: TranslationRow): boolean {
		if (this.isDefaultLanguageSelected()) return false;
		const original = this.originalRows[row.index];
		if (!original) return false;
		const lang = this.selectedLanguage();
		return row.values[lang] !== original.values[lang];
	}

	modifiedCount(): number {
		return this.rows().filter((row) => this.isRowModified(row)).length;
	}

	/** Reverts every edit back to the values as loaded, without re-fetching. */
	reset(): void {
		this.rows.set(this.originalRows.map((row) => ({ ...row, values: { ...row.values } })));
		this.dirty.set(false);
	}

	/**
	 * v1 scope: this is a static Angular SPA with no backend, so it can't write
	 * to `src/i18n/*.json` directly from the browser. Instead — mirroring
	 * uikit's "Download Config" pattern — this downloads the edited array for
	 * one language as JSON; the developer replaces the matching file under
	 * `src/i18n/` with it. Not in scope for v1: adding brand-new languages,
	 * machine translation, pluralization tooling.
	 */
	downloadLanguage(langCode: string): void {
		const rows = this.rows();
		const array = rows.map((row) => row.values[langCode] ?? '');
		const json = JSON.stringify(array, null, 2);
		const blob = new Blob([json], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `${langCode}.json`;
		link.click();
		URL.revokeObjectURL(url);
	}
}
