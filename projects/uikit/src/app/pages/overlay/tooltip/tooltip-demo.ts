import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective, TooltipDirective } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-tooltip-demo',
	imports: [ButtonDirective, TooltipDirective],
	templateUrl: './tooltip-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipDemo {}
