import { ChangeDetectionStrategy, Component, computed, effect, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CheckboxModule } from '@wawjs/ngx-prime/checkbox';
import { DialogModule } from '@wawjs/ngx-prime/dialog';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';

import { PagePromptService } from './page-prompt.service';

const KNOWN_ROLES = ['guest', 'user'];

@Component({
	selector: 'sc-page-prompt-dialog',
	imports: [
		FormsModule,
		ButtonModule,
		CheckboxModule,
		DialogModule,
		InputTextModule,
		SelectModule,
		TextareaModule,
	],
	templateUrl: './page-prompt-dialog.html',
	styleUrl: './page-prompt-dialog.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagePromptDialog {
	private readonly pagePromptService = inject(PagePromptService);

	readonly visible = model(false);

	protected readonly config = this.pagePromptService.config;
	protected readonly roleOptions = KNOWN_ROLES;

	protected readonly pageName = signal('');
	protected readonly role = signal(KNOWN_ROLES[1]);
	protected readonly selection = signal<Record<string, boolean>>({});
	protected readonly copied = signal(false);

	private copiedTimeout?: ReturnType<typeof setTimeout>;

	protected readonly slug = computed(() => {
		const slug = this.pageName()
			.trim()
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-+|-+$)/g, '');

		return slug || 'new-page';
	});

	protected readonly roleSlug = computed(() => {
		const slug = this.role()
			.trim()
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-+|-+$)/g, '');

		return slug || 'user';
	});

	protected readonly prompt = computed(() => {
		const cfg = this.config();

		if (!cfg) {
			return '';
		}

		const selection = this.selection();
		const selected = cfg.elements.filter((element) => selection[element.id]);
		const role = this.roleSlug();
		const slug = this.slug();
		const targetPath = `src/app/pages/${role}/${slug}`;
		const isKnownRole = KNOWN_ROLES.includes(role);

		const lines = [
			`Create a new Angular page for the "${role}" role in the main app (src/app - the actual product ` +
				`this repo ships, not this showcase), modeled after the "${cfg.pageTitle}" showcase page.`,
			'',
			`Reference page (for structure and ngx-prime component usage only): ${cfg.sourcePath}`,
			`Context: ${cfg.description}`,
			'',
			`Create the new page at: ${targetPath}`,
			`Follow the same file-naming and structure convention as sibling pages under src/app/pages/${role}/ ` +
				`(e.g. ${slug}.component.ts, ${slug}.routes.ts).`,
			isKnownRole
				? `Register the new route inside the existing "${role}" role block in src/app/app.routes.ts ` +
					`(loadChildren pointing at ./pages/${role}/${slug}/${slug}.routes), following the pattern of ` +
					`the other routes already registered there.`
				: `The "${role}" role does not exist yet in src/app/app.routes.ts. Add a new guarded top-level ` +
					`block for it (mirroring the existing guest/user blocks - its own guard and layout component), ` +
					`then register the new route inside it (loadChildren pointing at ./pages/${role}/${slug}/${slug}.routes).`,
			'',
			selected.length
				? 'Keep only these elements from the reference page, adapting their content to the new page:'
				: 'No elements were selected - recreate the full layout of the reference page as-is.',
			...selected.map((element) => `- ${element.label}: ${element.description}`),
			'',
			'Keep the same visual style, theme tokens and ngx-prime components used by the reference page.',
		];

		return lines.join('\n');
	});

	constructor() {
		effect(() => {
			const cfg = this.config();

			if (!this.visible()) {
				return;
			}

			const defaults: Record<string, boolean> = {};

			for (const element of cfg?.elements ?? []) {
				defaults[element.id] = element.selectedByDefault ?? true;
			}

			this.selection.set(defaults);
			this.pageName.set('');
			this.role.set(KNOWN_ROLES[1]);
			this.copied.set(false);
		});
	}

	protected isSelected(id: string): boolean {
		return this.selection()[id] ?? false;
	}

	protected setSelected(id: string, value: boolean): void {
		this.selection.update((current) => ({ ...current, [id]: value }));
	}

	protected async copyPrompt(): Promise<void> {
		await navigator.clipboard.writeText(this.prompt());

		this.copied.set(true);
		clearTimeout(this.copiedTimeout);
		this.copiedTimeout = setTimeout(() => this.copied.set(false), 1500);
	}
}
