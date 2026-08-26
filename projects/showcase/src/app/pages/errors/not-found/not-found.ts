import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@wawjs/ngx-ui';

@Component({
	selector: 'sc-not-found',
	imports: [ButtonDirective, RouterLink],
	templateUrl: './not-found.html',
	styleUrl: './not-found.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {}
