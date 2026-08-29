import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonDirective, Modal, ModalService } from '@wawjs/ngx-ui';
import { DialogContent } from './dialog-content';

@Component({
	selector: 'uk-dialog-demo',
	imports: [ButtonDirective],
	templateUrl: './dialog-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDemo {
	private readonly _modalService = inject(ModalService);

	protected showBasic(): void {
		this._modalService.show({
			component: DialogContent,
			message: 'This is a basic dialog.',
			size: 'small',
			ariaLabel: 'Basic dialog',
		} satisfies Modal);
	}

	protected showBig(): void {
		this._modalService.show({
			component: DialogContent,
			message: 'A larger dialog, using size="big".',
			size: 'big',
			ariaLabel: 'Large dialog',
		} satisfies Modal);
	}
}
