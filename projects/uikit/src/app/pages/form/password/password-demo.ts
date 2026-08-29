import { Component, signal } from '@angular/core';
import { InputComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-password-demo',
	imports: [InputComponent],
	templateUrl: './password-demo.html',
})
export class PasswordDemo {
	protected readonly value = signal('');
}
