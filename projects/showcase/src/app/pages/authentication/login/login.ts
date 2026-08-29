import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective, CardComponent, InputComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'sc-login',
	imports: [ButtonDirective, CardComponent, InputComponent, RouterLink],
	templateUrl: './login.html',
	styleUrl: './login.scss',
})
export class Login {
	protected readonly email = signal('');
	protected readonly password = signal('');
	protected readonly remember = signal(false);
}
