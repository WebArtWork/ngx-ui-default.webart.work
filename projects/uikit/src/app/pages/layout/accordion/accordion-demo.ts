import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccordionComponent, AccordionPanelComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-accordion-demo',
	imports: [AccordionComponent, AccordionPanelComponent],
	templateUrl: './accordion-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionDemo {}
