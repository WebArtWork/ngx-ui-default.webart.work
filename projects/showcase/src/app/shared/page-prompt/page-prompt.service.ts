import { Injectable, signal } from '@angular/core';
import { PagePromptConfig } from './page-prompt.types';

@Injectable({ providedIn: 'root' })
export class PagePromptService {
	private readonly _config = signal<PagePromptConfig | null>(null);

	readonly config = this._config.asReadonly();

	setConfig(config: PagePromptConfig): void {
		this._config.set(config);
	}

	clearConfig(config: PagePromptConfig): void {
		if (this._config() === config) {
			this._config.set(null);
		}
	}
}
