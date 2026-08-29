import { Component, signal } from '@angular/core';
import { InputComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-radiobutton-demo',
	imports: [InputComponent],
	templateUrl: './radiobutton-demo.html',
})
export class RadioButtonDemo {
	protected readonly cities = ['Rome', 'Paris', 'Berlin'];
	protected readonly city = signal('Rome');
}
