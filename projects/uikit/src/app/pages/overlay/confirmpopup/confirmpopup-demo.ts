import { Component } from '@angular/core';
import { ButtonDirective, ConfirmPopupDirective } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-confirmpopup-demo',
	imports: [ButtonDirective, ConfirmPopupDirective],
	templateUrl: './confirmpopup-demo.html',
})
export class ConfirmPopupDemo {
	protected onAccept(): void {
		// demo only
	}
}
