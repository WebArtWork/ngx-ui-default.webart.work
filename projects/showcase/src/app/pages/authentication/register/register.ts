import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective, CardComponent, InputComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'sc-register',
	imports: [ButtonDirective, CardComponent, InputComponent, RouterLink],
	templateUrl: './register.html',
	styleUrl: './register.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {
	protected readonly name = signal('');
	protected readonly email = signal('');
	protected readonly password = signal('');
	protected readonly acceptTerms = signal(false);
}
