import { Component, signal } from '@angular/core';
import { SelectComponent } from '@wawjs/ngx-ui';

interface City {
	name: string;
	code: string;
}

@Component({
	selector: 'uk-select-demo',
	imports: [SelectComponent],
	templateUrl: './select-demo.html',
})
export class SelectDemo {
	protected readonly cities: City[] = [
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' },
	];

	protected readonly selectedCity = signal<string | null>(null);
}
