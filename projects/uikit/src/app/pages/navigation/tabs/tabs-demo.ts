import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabPanelComponent, TabsComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-tabs-demo',
	imports: [TabsComponent, TabPanelComponent],
	templateUrl: './tabs-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDemo {}
