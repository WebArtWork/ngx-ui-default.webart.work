import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgressBarComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-progressbar-demo',
	imports: [ProgressBarComponent],
	templateUrl: './progressbar-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarDemo {}
