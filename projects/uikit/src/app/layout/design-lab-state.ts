import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { TOKEN_VAR_MAP, ThemeService, ThemeTokens } from '@wawjs/ngx-ui';

const STORAGE_KEY = 'uikit-design-lab-state';
const MENU_MODE_KEY = 'uikit-design-lab-menu-mode';

export type MenuMode = 'static' | 'overlay';

/**
 * Overridable subset of ngx-ui's `ThemeTokens` exposed on the Design Lab
 * page. ngx-ui's own `ThemeService` only accepts token config at bootstrap
 * (via `provideNgxUi()`), so live edits here are applied directly as CSS
 * custom properties on `documentElement` and re-applied whenever
 * `ThemeService` itself re-applies its defaults (mode/density/radius
 * changes), so user overrides survive those switches instead of being
 * wiped by them.
 */
export type DesignLabTokens = Pick<
	ThemeTokens,
	| 'primary'
	| 'primaryHover'
	| 'secondary'
	| 'danger'
	| 'bgSecondary'
	| 'textPrimary'
	| 'radiusBtn'
	| 'radiusCard'
	| 'radiusPill'
>;

@Injectable({ providedIn: 'root' })
export class DesignLabState {
	private readonly _themeService = inject(ThemeService);
	private readonly _document = inject(DOCUMENT);
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	readonly overrides = signal<DesignLabTokens>({});
	readonly menuMode = signal<MenuMode>('static');

	constructor() {
		if (!this._isBrowser) {
			return;
		}

		this._restore();

		try {
			const storedMenuMode = localStorage.getItem(MENU_MODE_KEY) as MenuMode | null;

			if (storedMenuMode) {
				this.menuMode.set(storedMenuMode);
			}
		} catch {
			// ignore malformed/unavailable storage
		}

		effect(() => {
			// Re-apply on top whenever mode/density/radius changes re-apply
			// ThemeService's own defaults, or when an override itself changes.
			this._themeService.mode();
			this._themeService.density();
			this._themeService.radius();

			this._apply(this.overrides());
		});
	}

	get dark(): boolean {
		return this._themeService.mode() === 'dark';
	}

	toggleDarkMode(): void {
		this._themeService.setMode(this.dark ? 'light' : 'dark');
	}

	setMenuMode(mode: MenuMode): void {
		this.menuMode.set(mode);

		try {
			localStorage.setItem(MENU_MODE_KEY, mode);
		} catch {
			// ignore write failures (e.g. storage disabled/full)
		}
	}

	hasChanges(): boolean {
		return Object.keys(this.overrides()).length > 0;
	}

	setToken<K extends keyof DesignLabTokens>(key: K, value: DesignLabTokens[K] | undefined): void {
		const next = { ...this.overrides() };

		if (value === undefined || value === '') {
			delete next[key];
		} else {
			next[key] = value;
		}

		this.overrides.set(next);
		this._persist();
	}

	reset(): void {
		this.overrides.set({});
		this._persist();
	}

	private _apply(tokens: DesignLabTokens): void {
		const root = this._document.documentElement;

		for (const key of Object.keys(tokens) as (keyof DesignLabTokens)[]) {
			const cssVar = TOKEN_VAR_MAP[key];
			const value = tokens[key];

			if (cssVar && value) {
				root.style.setProperty(cssVar, value);
			}
		}
	}

	private _restore(): void {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			const stored = raw ? (JSON.parse(raw) as DesignLabTokens) : null;

			if (stored) {
				this.overrides.set(stored);
			}
		} catch {
			// ignore malformed/unavailable storage
		}
	}

	private _persist(): void {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(this.overrides()));
		} catch {
			// ignore write failures (e.g. storage disabled/full)
		}
	}
}
