import { Component, signal } from '@angular/core';
import { ButtonDirective, FileComponent, TagComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-file-composite-demo',
	imports: [ButtonDirective, FileComponent, TagComponent],
	templateUrl: './file-composite-demo.html',
})
export class FileCompositeDemo {
	protected readonly files = signal([
		{ name: 'Invoice-0231.pdf', size: '212 KB' },
		{ name: 'Contract-Final.docx', size: '58 KB' },
		{ name: 'Logo.png', size: '34 KB' },
	]);

	protected remove(name: string): void {
		this.files.update((list) => list.filter((f) => f.name !== name));
	}
}
