import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
	ButtonStylesComponent,
	ConfirmPopupStylesComponent,
	TooltipStylesComponent,
} from '@wawjs/ngx-ui';
import { DesignLabState } from '../design-lab-state';
import { UikitSidebar } from '../sidebar/uikit-sidebar';
import { UikitTopbar } from '../topbar/uikit-topbar';

@Component({
	selector: 'uk-shell',
	imports: [
		RouterOutlet,
		UikitTopbar,
		UikitSidebar,
		ButtonStylesComponent,
		TooltipStylesComponent,
		ConfirmPopupStylesComponent,
	],
	templateUrl: './uikit-shell.html',
	styleUrl: './uikit-shell.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UikitShell {
	protected readonly designLabState = inject(DesignLabState);
	protected readonly sidebarOpen = signal(false);

	protected toggleSidebar(): void {
		this.sidebarOpen.update((value) => !value);
	}
}
