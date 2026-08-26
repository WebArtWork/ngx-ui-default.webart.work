import { Routes } from '@angular/router';
import { ShowcaseShell } from './layout/shell/showcase-shell';

export const routes: Routes = [
	{
		path: '',
		component: ShowcaseShell,
		children: [
			{ path: '', loadComponent: () => import('./pages/landing/landing').then((m) => m.Landing) },
			{
				path: 'dashboards/default',
				loadComponent: () =>
					import('./pages/dashboards/default/dashboard').then((m) => m.Dashboard),
			},
			{
				path: 'dashboards/analytics',
				loadComponent: () =>
					import('./pages/dashboards/analytics/analytics').then((m) => m.Analytics),
			},
			{
				path: 'users/list',
				loadComponent: () => import('./pages/users/list/users').then((m) => m.Users),
			},
			{
				path: 'users/profile',
				loadComponent: () => import('./pages/users/profile/profile').then((m) => m.Profile),
			},
			{
				path: 'users/create-edit',
				loadComponent: () =>
					import('./pages/users/create-edit/user-create-edit').then((m) => m.UserCreateEdit),
			},
			{
				path: 'ecommerce/products',
				loadComponent: () =>
					import('./pages/ecommerce/products/products').then((m) => m.Products),
			},
			{
				path: 'ecommerce/product-create-edit',
				loadComponent: () =>
					import('./pages/ecommerce/product-create-edit/product-create-edit').then(
						(m) => m.ProductCreateEdit,
					),
			},
			{
				path: 'ecommerce/orders',
				loadComponent: () => import('./pages/ecommerce/orders/orders').then((m) => m.Orders),
			},
			{
				path: 'ecommerce/order-details',
				loadComponent: () =>
					import('./pages/ecommerce/order-details/order-details').then((m) => m.OrderDetails),
			},
			{
				path: 'projects/list',
				loadComponent: () =>
					import('./pages/projects/list/project-list').then((m) => m.ProjectList),
			},
			{
				path: 'projects/project-details',
				loadComponent: () =>
					import('./pages/projects/project-details/project-details').then(
						(m) => m.ProjectDetails,
					),
			},
			{
				path: 'projects/tasks',
				loadComponent: () => import('./pages/projects/tasks/tasks').then((m) => m.Tasks),
			},
			{
				path: 'applications/calendar',
				loadComponent: () =>
					import('./pages/applications/calendar/calendar').then((m) => m.CalendarPage),
			},
			{
				path: 'applications/chat',
				loadComponent: () => import('./pages/applications/chat/chat').then((m) => m.Chat),
			},
			{
				path: 'applications/files',
				loadComponent: () => import('./pages/applications/files/files').then((m) => m.Files),
			},
			{
				path: 'account/settings',
				loadComponent: () =>
					import('./pages/account/settings/settings').then((m) => m.AccountSettings),
			},
		],
	},
	{
		path: 'authentication/login',
		loadComponent: () => import('./pages/authentication/login/login').then((m) => m.Login),
	},
	{
		path: 'authentication/register',
		loadComponent: () =>
			import('./pages/authentication/register/register').then((m) => m.Register),
	},
	{
		path: '404',
		loadComponent: () => import('./pages/errors/not-found/not-found').then((m) => m.NotFound),
	},
	{ path: '**', redirectTo: '404' },
];
