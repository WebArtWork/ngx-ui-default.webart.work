import {
	Component,
	computed,
	inject,
	input,
	output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoreService } from '@wawjs/ngx-core';
import { TranslateService } from '@wawjs/ngx-translate';
import { NavIconComponent } from '../../shared/nav-icon/nav-icon.component';
import { SidebarService } from '../sidebar/sidebar.service';

/** Mirrors the sidebar mode this burger icon represents. */
type BurgerState = 'three-lines' | 'two-lines' | 'one-line' | 'cross';

const BURGER_ICONS: Record<BurgerState, string> = {
	'three-lines': 'bars',
	'two-lines': 'list',
	'one-line': 'minus',
	cross: 'times',
};

@Component({
	selector: 'layout-topbar',
	templateUrl: './topbar.component.html',
	imports: [RouterLink, NavIconComponent],
})
export class TopbarComponent {
	private readonly _coreService = inject(CoreService);
	private readonly _sidebarService = inject(SidebarService);
	readonly translateService = inject(TranslateService);

	readonly isOpen = input(false);
	readonly sidebarToggler = input(false);
	readonly sidebarOpen = output<boolean>();
	readonly showProfile = input(false);
	readonly viewport = this._coreService.viewport;

	readonly burgerState = computed<BurgerState>(() => {
		if (this._sidebarService.isMobile()) {
			return this._sidebarService.mobileOpen() ? 'cross' : 'three-lines';
		}

		switch (this._sidebarService.webMode()) {
			case 'shown':
				return 'three-lines';
			case 'minimized':
				return 'two-lines';
			case 'hidden':
			default:
				return 'one-line';
		}
	});

	readonly burgerIcon = computed(() => BURGER_ICONS[this.burgerState()]);

	onBurgerClick(): void {
		this._sidebarService.burgerClick();
	}

	private _onBurgerHover: ReturnType<typeof setTimeout> | null = null;
	onBurgerHover(hovered: boolean): void {
		if (this._onBurgerHover) {
			clearTimeout(this._onBurgerHover);
			this._onBurgerHover = null;
		}

		if (hovered) {
			this._sidebarService.onBurgerHover(hovered);
		} else {
			this._onBurgerHover = setTimeout(() => {
				this._sidebarService.onBurgerHover(hovered);
				this._onBurgerHover = null;
			}, 2000);
		}
	}
}
