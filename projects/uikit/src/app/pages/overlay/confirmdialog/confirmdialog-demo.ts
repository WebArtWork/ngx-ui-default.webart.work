import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonDirective, ConfirmService } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-confirmdialog-demo',
	imports: [ButtonDirective],
	templateUrl: './confirmdialog-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogDemo {
	private readonly _confirmService = inject(ConfirmService);

	protected confirm(): void {
		this._confirmService.confirm({
			message: 'Are you sure you want to proceed?',
			header: 'Confirmation',
			icon: 'warning',
		});
	}
}
