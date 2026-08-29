import { Component } from '@angular/core';
import { ButtonDirective, TooltipDirective } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-tooltip-demo',
	imports: [ButtonDirective, TooltipDirective],
	templateUrl: './tooltip-demo.html',
})
export class TooltipDemo {}
