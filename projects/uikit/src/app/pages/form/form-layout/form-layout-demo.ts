import { Component, computed, signal } from '@angular/core';
import { ButtonDirective, InputComponent, SelectComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-form-layout-demo',
	imports: [ButtonDirective, InputComponent, SelectComponent],
	templateUrl: './form-layout-demo.html',
})
export class FormLayoutDemo {
	protected readonly firstName = signal('');
	protected readonly lastName = signal('');
	protected readonly email = signal('');
	protected readonly password = signal('');
	protected readonly birthDate = signal('');
	protected readonly country = signal<string | null>(null);
	protected readonly acceptTerms = signal(false);
	protected readonly submitted = signal(false);

	protected readonly countries = [
		{ name: 'United States', code: 'US' },
		{ name: 'Germany', code: 'DE' },
		{ name: 'Japan', code: 'JP' },
	];

	protected readonly firstNameError = computed(() =>
		this.submitted() && !this.firstName() ? 'First name is required.' : null,
	);
	protected readonly lastNameError = computed(() =>
		this.submitted() && !this.lastName() ? 'Last name is required.' : null,
	);
	protected readonly emailError = computed(() =>
		this.submitted() && !this.email() ? 'Email is required.' : null,
	);

	protected submit(): void {
		this.submitted.set(true);
	}
}
