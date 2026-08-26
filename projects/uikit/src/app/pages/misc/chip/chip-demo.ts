import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChipComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-chip-demo',
	imports: [ChipComponent],
	templateUrl: './chip-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipDemo {}
