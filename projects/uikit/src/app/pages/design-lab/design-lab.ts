import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
	BadgeComponent,
	ButtonDirective,
	CardComponent,
	TagComponent,
	ThemeDensity,
	ThemeRadius,
	ThemeService,
} from '@wawjs/ngx-ui';
import { DesignLabState, DesignLabTokens } from '../../layout/design-lab-state';

interface SwatchOption {
	name: string;
	color: string;
}

interface TokenField {
	key: keyof DesignLabTokens;
	label: string;
	fallback: string;
}

@Component({
	selector: 'uk-design-lab',
	imports: [ButtonDirective, CardComponent, TagComponent, BadgeComponent],
	templateUrl: './design-lab.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignLab {
	protected readonly designLabState = inject(DesignLabState);
	protected readonly themeService = inject(ThemeService);

	protected readonly densities: ThemeDensity[] = ['comfortable', 'compact'];
	protected readonly radiuses: ThemeRadius[] = ['rounded', 'square'];

	protected readonly primarySwatches: SwatchOption[] = [
		{ name: 'blue', color: '#2563eb' },
		{ name: 'indigo', color: '#6366f1' },
		{ name: 'violet', color: '#8b5cf6' },
		{ name: 'green', color: '#16a34a' },
		{ name: 'teal', color: '#0d9488' },
		{ name: 'amber', color: '#d97706' },
		{ name: 'rose', color: '#e11d48' },
	];

	protected readonly colorFields: TokenField[] = [
		{ key: 'primary', label: 'Primary', fallback: '#2563eb' },
		{ key: 'primaryHover', label: 'Primary Hover', fallback: '#1d4ed8' },
		{ key: 'secondary', label: 'Secondary', fallback: '#dc2626' },
		{ key: 'danger', label: 'Danger', fallback: '#ef4444' },
		{ key: 'bgSecondary', label: 'Surface Background', fallback: '#ffffff' },
		{ key: 'textPrimary', label: 'Text', fallback: '#0f172a' },
	];

	protected readonly radiusFields: TokenField[] = [
		{ key: 'radiusBtn', label: 'Button', fallback: '6px' },
		{ key: 'radiusCard', label: 'Card', fallback: '12px' },
		{ key: 'radiusPill', label: 'Pill', fallback: '9999px' },
	];

	protected setDensity(density: ThemeDensity): void {
		this.themeService.setDensity(density);
	}

	protected setRadius(radius: ThemeRadius): void {
		this.themeService.setRadius(radius);
	}

	protected setPrimarySwatch(color: string): void {
		this.designLabState.setToken('primary', color);
	}

	protected setToken(key: keyof DesignLabTokens, value: string): void {
		this.designLabState.setToken(key, value);
	}

	protected tokenValue(field: TokenField): string {
		return this.designLabState.overrides()[field.key] ?? field.fallback;
	}
}
