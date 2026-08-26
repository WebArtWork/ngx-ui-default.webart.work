import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { InputComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-datepicker-demo',
	imports: [InputComponent],
	templateUrl: './datepicker-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerDemo {
	protected readonly date = signal('');
}
