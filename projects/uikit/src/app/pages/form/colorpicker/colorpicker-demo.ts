import { Component, signal } from '@angular/core';
import { InputComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-colorpicker-demo',
	imports: [InputComponent],
	templateUrl: './colorpicker-demo.html',
})
export class ColorPickerDemo {
	protected readonly color = signal('#3357ff');
}
