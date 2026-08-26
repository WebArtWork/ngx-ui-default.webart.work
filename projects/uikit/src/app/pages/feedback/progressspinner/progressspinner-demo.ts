import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpinnerComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-progressspinner-demo',
	imports: [SpinnerComponent],
	templateUrl: './progressspinner-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressSpinnerDemo {}
