import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AlertService, AlertType, ButtonDirective } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-toast-demo',
	imports: [ButtonDirective],
	templateUrl: './toast-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastDemo {
	private readonly _alertService = inject(AlertService);

	protected show(type: AlertType): void {
		this._alertService.show({ text: `A ${type} message`, type, timeout: 3000 });
	}
}
