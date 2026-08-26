import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-avatar-demo',
	imports: [AvatarComponent],
	templateUrl: './avatar-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarDemo {}
