import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-divider-demo',
	imports: [DividerComponent],
	templateUrl: './divider-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerDemo {}
