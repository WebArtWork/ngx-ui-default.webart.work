import { Component } from '@angular/core';
import { TagComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-tag-demo',
	imports: [TagComponent],
	templateUrl: './tag-demo.html',
})
export class TagDemo {
	protected readonly types = [
		'success',
		'info',
		'warning',
		'danger',
		'secondary',
		'dark',
	] as const;
}
