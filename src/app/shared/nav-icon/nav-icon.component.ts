import { Component, computed, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';

/**
 * App-owned replacement for `@wawjs/ngx-ui`'s `material-icon`, scoped to what
 * this app actually used it for: a PrimeIcons icon plus an optional label,
 * either as a router link or a clickable action. Reuses the same `.mi` BEM
 * class names and `--c-*`/`--sp-*`/`--radius-*` custom properties the
 * original rendered with, so no other styling needs to change.
 */
@Component({
	selector: 'app-nav-icon',
	imports: [RouterLink, RouterLinkActive, TranslateDirective],
	templateUrl: './nav-icon.component.html',
	styleUrl: './nav-icon.component.scss',
})
export class NavIconComponent {
	/** PrimeIcons suffix, e.g. `'cog'` renders `pi pi-cog`. */
	readonly icon = input.required<string>();
	/** Visible label; when empty, renders icon-only (uses `ariaLabel` instead). */
	readonly name = input('');
	/** Used when `name` is empty (icon-only). */
	readonly ariaLabel = input('');
	/** If empty, renders as a clickable action and emits `action` instead of navigating. */
	readonly routerLink = input('');

	readonly action = output<void>();

	protected readonly hasRouterLink = computed(() => this.routerLink().trim().length > 0);

	protected onAction(): void {
		this.action.emit();
	}

	protected onKeydown(event: KeyboardEvent): void {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			this.onAction();
		}
	}
}
