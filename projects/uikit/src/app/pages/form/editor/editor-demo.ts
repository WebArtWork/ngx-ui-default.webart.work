import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { EditorComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'uk-editor-demo',
	imports: [EditorComponent],
	templateUrl: './editor-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorDemo {
	protected readonly text = signal('<p>Hello <strong>World</strong>!</p>');
}
