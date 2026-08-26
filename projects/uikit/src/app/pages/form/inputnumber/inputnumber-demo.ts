import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { InputComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-inputnumber-demo',
	imports: [InputComponent],
	templateUrl: './inputnumber-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberDemo {
	protected readonly value = signal(1000);
}
