import { Component } from '@angular/core';
import { ButtonDirective } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-button-demo',
	imports: [ButtonDirective],
	templateUrl: './button-demo.html',
})
export class ButtonDemo {
	protected readonly sizes = [undefined, 'small', 'large'] as const;
	protected readonly types = [
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	] as const;
}
