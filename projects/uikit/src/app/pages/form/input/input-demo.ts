import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { InputComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-input-demo',
	imports: [InputComponent],
	templateUrl: './input-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDemo {
	protected readonly basicValue = signal('');
	protected readonly clearableValue = signal('Clear me');
}
