import { Component, signal } from '@angular/core';
import { FileComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-fileupload-demo',
	imports: [FileComponent],
	templateUrl: './fileupload-demo.html',
})
export class FileUploadDemo {
	protected readonly files = signal<File[]>([]);
}
