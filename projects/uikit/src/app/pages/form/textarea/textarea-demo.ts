import { Component, signal } from '@angular/core';
import { InputComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-textarea-demo',
	imports: [InputComponent],
	templateUrl: './textarea-demo.html',
})
export class TextareaDemo {
	protected readonly value = signal('');
}
