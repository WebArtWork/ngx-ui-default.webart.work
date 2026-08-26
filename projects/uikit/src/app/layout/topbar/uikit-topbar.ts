import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonDirective, TooltipDirective } from '@wawjs/ngx-ui';
import { DesignLabState } from '../design-lab-state';

@Component({
	selector: 'uk-topbar',
	imports: [ButtonDirective, TooltipDirective],
	templateUrl: './uikit-topbar.html',
	styleUrl: './uikit-topbar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UikitTopbar {
	protected readonly designLabState = inject(DesignLabState);
	private readonly router = inject(Router);

	readonly menuToggle = output<void>();

	protected goToDesignLab(): void {
		this.router.navigate(['/design-lab']);
	}

	/**
	 * Downloads the tokens actually changed on the Design Lab page as JSON
	 * shaped like `provideNgxUi({ tokens: {...} })`, ready to paste into a
	 * real app's bootstrap config.
	 */
	protected downloadConfig(): void {
		const json = JSON.stringify({ tokens: this.designLabState.overrides() }, null, 2);
		const blob = new Blob([json], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'ngx-ui-theme-config.json';
		link.click();
		URL.revokeObjectURL(url);
	}
}
