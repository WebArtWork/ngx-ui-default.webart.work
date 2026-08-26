import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowcaseSidebar } from '../sidebar/showcase-sidebar';
import { ShowcaseTopbar } from '../topbar/showcase-topbar';

@Component({
	selector: 'sc-shell',
	imports: [RouterOutlet, ShowcaseTopbar, ShowcaseSidebar],
	templateUrl: './showcase-shell.html',
	styleUrl: './showcase-shell.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseShell {
	protected readonly sidebarOpen = signal(false);

	protected toggleSidebar(): void {
		this.sidebarOpen.update((value) => !value);
	}
}
