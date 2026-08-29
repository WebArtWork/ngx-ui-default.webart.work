import { Component, signal } from '@angular/core';
import { SelectComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-multiselect-demo',
	imports: [SelectComponent],
	templateUrl: './multiselect-demo.html',
})
export class MultiSelectDemo {
	protected readonly cities = [
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' },
	];

	protected readonly selectedCities = signal<string[]>([]);
}
