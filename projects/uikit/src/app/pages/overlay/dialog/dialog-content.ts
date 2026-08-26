import { Component } from '@angular/core';

@Component({
	selector: 'uk-dialog-content',
	template: `<p>{{ message }}</p>`,
})
export class DialogContent {
	message = '';

	/** Set by ModalService when this component is opened as a modal. */
	close: () => void = () => {};
}
