import {
	Component,
	computed,
	inject,
	signal,
} from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
import { NEW_USER, User, UserService } from '@wawjs/ngx-bos';
import { AlertService, ButtonDirective, InputComponent } from '@wawjs/ngx-ui';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { clientSchema } from './client.schema';

@Component({
	selector: 'app-client',
	imports: [
		FormField,
		ButtonDirective,
		InputComponent,
		TranslateDirective,
	],
	templateUrl: './client.component.html',
	styleUrl: './client.component.scss',
})
export class ClientComponent {
	private readonly _userService = inject(UserService);
	private readonly _alertService = inject(AlertService);
	readonly translateService = inject(TranslateService);

	readonly clientModel = signal<User>(NEW_USER);

	readonly clientForm = form(this.clientModel, clientSchema);
	readonly isSubmitDisabled = computed(() => this.clientForm().invalid());
	wFormSubmit() {
		submit(this.clientForm, async (field) => {
			this._userService.create(field().value()).subscribe(() => {
				this._alertService.success({
					text: this.translateService.translate('Клієнта створено')(),
				});
			});

			this.clientModel.set(NEW_USER);

			return null;
		});
	}
}
