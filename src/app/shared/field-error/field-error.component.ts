import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { TranslateDirective } from '@wawjs/ngx-translate';

/**
 * Restores the inline validation message `@wawjs/ngx-ui`'s `winput` used to
 * render automatically (`winput__error`, shown once a field is touched/dirty
 * and invalid). ngx-prime's `pInputText`/`pPassword`/`pTextarea` are bare
 * styling directives with no error display of their own, so each form now
 * pairs its native input with `<app-field-error [field]="form.someField" />`.
 */
@Component({
	selector: 'app-field-error',
	template: `
		@if (message(); as msg) {
			<small class="field-error" [translate]="msg"></small>
		}
	`,
	styles: `
		.field-error {
			display: block;
			margin-top: var(--sp-1);
			color: var(--c-secondary);
			font-size: 0.8rem;
		}
	`,
	imports: [TranslateDirective],
})
export class FieldErrorComponent {
	readonly field = input.required<Field<unknown>>();

	protected message(): string | null {
		const state = this.field()();
		const touched = state.touched();
		const dirty = state.dirty();
		if (!state.invalid() || !(touched || dirty)) {
			return null;
		}

		const errors = state.errors();
		const first = errors[0];
		if (!first) return null;

		return typeof first.message === 'string' ? first.message : null;
	}
}
