import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import Aura from '@wawjs/css-prime-themes/aura';
import { provideNgxPrime } from '@wawjs/ngx-prime/config';
import { provideNgxUi } from '@wawjs/ngx-ui';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideRouter(
			routes,
			withInMemoryScrolling({
				anchorScrolling: 'enabled',
				scrollPositionRestoration: 'enabled',
			}),
		),
		provideNgxPrime({
			theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } },
		}),
		provideNgxUi(),
	],
};
