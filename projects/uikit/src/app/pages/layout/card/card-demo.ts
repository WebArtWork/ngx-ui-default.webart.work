import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective, CardComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-card-demo',
	imports: [CardComponent, ButtonDirective],
	templateUrl: './card-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDemo {}
