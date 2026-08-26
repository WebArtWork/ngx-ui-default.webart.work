import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective, CardComponent } from '@wawjs/ngx-ui';

interface PageLink {
	name: string;
	path: string;
	description: string;
}

interface PageGroup {
	title: string;
	icon: string;
	pages: PageLink[];
}

interface RelatedProject {
	icon: string;
	title: string;
	description: string;
	url: string;
}

@Component({
	selector: 'sc-landing',
	imports: [ButtonDirective, CardComponent, RouterLink],
	templateUrl: './landing.html',
	styleUrl: './landing.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing {
	protected readonly features = [
		{ icon: 'bolt', title: 'Fast', description: 'Built on the esbuild-based Angular application builder.' },
		{ icon: 'palette', title: 'Themeable', description: 'Runtime theming powered by ngx-prime design tokens.' },
		{ icon: 'shield', title: 'Reliable', description: 'Standalone components, signals, and zoneless change detection.' },
	];

	protected readonly relatedProjects: RelatedProject[] = [
		{
			icon: 'palette',
			title: 'UI Kit',
			description:
				'Every ngx-prime component with a live example, plus the Design Lab: a runtime theme configurator for tuning this template\'s colors, radii and tokens.',
			url: 'https://ngx-prime-default-uikit.webart.work',
		},
		{
			icon: 'translate',
			title: 'Translator',
			description:
				"A small tool for browsing and editing the template's interface translation files, and exporting the updated JSON.",
			url: 'https://ngx-prime-default-translator.webart.work',
		},
	];

	protected readonly pageGroups: PageGroup[] = [
		{
			title: 'Dashboards',
			icon: 'home',
			pages: [
				{
					name: 'Default',
					path: '/dashboards/default',
					description: 'Summary stat cards above a Recent Orders table.',
				},
				{
					name: 'Analytics',
					path: '/dashboards/analytics',
					description: 'Revenue trend chart alongside a set of goal meters.',
				},
			],
		},
		{
			title: 'Users',
			icon: 'group',
			pages: [
				{
					name: 'List',
					path: '/users/list',
					description: 'Searchable, paginated table of users.',
				},
				{
					name: 'Profile',
					path: '/users/profile',
					description: "A user's profile card with stats and tags.",
				},
				{
					name: 'Create / Edit',
					path: '/users/create-edit',
					description: 'Form for creating or editing a user.',
				},
			],
		},
		{
			title: 'Ecommerce',
			icon: 'shopping_cart',
			pages: [
				{
					name: 'Products',
					path: '/ecommerce/products',
					description: 'Product catalog table with stock levels and status tags.',
				},
				{
					name: 'Create / Edit Product',
					path: '/ecommerce/product-create-edit',
					description: 'Form for creating or editing a product.',
				},
				{
					name: 'Orders',
					path: '/ecommerce/orders',
					description: 'Order list with customer and status.',
				},
				{
					name: 'Order Details',
					path: '/ecommerce/order-details',
					description: 'A single order: status timeline, customer and line items.',
				},
			],
		},
		{
			title: 'Projects',
			icon: 'folder',
			pages: [
				{
					name: 'List',
					path: '/projects/list',
					description: 'Project cards with client and status.',
				},
				{
					name: 'Project Details',
					path: '/projects/project-details',
					description: 'Overview of a single project.',
				},
				{
					name: 'Tasks',
					path: '/projects/tasks',
					description: 'Kanban-style To Do / In Progress / Done board.',
				},
			],
		},
		{
			title: 'Applications',
			icon: 'grid_view',
			pages: [
				{
					name: 'Calendar',
					path: '/applications/calendar',
					description: 'Event calendar with an events list.',
				},
				{
					name: 'Chat',
					path: '/applications/chat',
					description: 'Contact list next to a conversation panel.',
				},
				{
					name: 'Files',
					path: '/applications/files',
					description: 'File browser with upload and breadcrumbs.',
				},
			],
		},
		{
			title: 'Account',
			icon: 'settings',
			pages: [
				{
					name: 'Settings',
					path: '/account/settings',
					description: 'Account settings form.',
				},
			],
		},
		{
			title: 'Authentication',
			icon: 'lock',
			pages: [
				{ name: 'Sign In', path: '/authentication/login', description: 'Login form.' },
				{ name: 'Create Account', path: '/authentication/register', description: 'Registration form.' },
			],
		},
	];

	protected readonly workFolderLines = [
		'# go to your home directory',
		'cd',
		'# create a folder to keep your projects in',
		'mkdir work',
		'# move into it',
		'cd work',
		'# now we are in the work folder, where we can keep multiple projects',
	];

	protected readonly setupLines = [
		'# clone the template',
		'git clone https://github.com/WebArtWork/ngx-prime-default.webart.work.git my-app',
		'# move into the project',
		'cd my-app',
		'# install dependencies',
		'npm install',
		'# start the dev server',
		'npm start',
	];

	protected readonly githubLines = [
		'# point your local clone at your own repo (create it empty on GitHub first)',
		'git remote set-url origin https://github.com/<you>/<your-repo>.git',
		'# stage and commit your changes',
		'git add .',
		'git commit -m "Initial commit"',
		'# push to your repo',
		'git push -u origin master',
	];

	protected readonly workFolderCommand = this.workFolderLines.join('\n');

	protected readonly setupCommand = this.setupLines.join('\n');

	protected readonly githubCommand = this.githubLines.join('\n');

	protected readonly copiedCommand = signal<string | null>(null);

	private copiedTimeout?: ReturnType<typeof setTimeout>;

	protected async copyCommand(name: string, command: string): Promise<void> {
		await navigator.clipboard.writeText(command);

		this.copiedCommand.set(name);
		clearTimeout(this.copiedTimeout);
		this.copiedTimeout = setTimeout(() => this.copiedCommand.set(null), 1500);
	}

	protected isComment(line: string): boolean {
		return line.startsWith('#');
	}
}
