import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./pages/translations/translations-page').then((m) => m.TranslationsPage),
	},
];
