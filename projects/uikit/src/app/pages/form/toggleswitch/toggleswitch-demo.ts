import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-toggleswitch-demo',
	imports: [ToggleComponent],
	templateUrl: './toggleswitch-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleSwitchDemo {
	protected readonly checked = signal(false);
}
