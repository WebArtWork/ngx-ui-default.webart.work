import { Component, signal } from '@angular/core';
import { InputComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-checkbox-demo',
	imports: [InputComponent],
	templateUrl: './checkbox-demo.html',
})
export class CheckboxDemo {
	protected readonly checked = signal(true);
	protected readonly fruits = ['Apple', 'Banana', 'Cherry'];
	protected readonly selectedFruits = signal<string[]>(['Apple']);
}
