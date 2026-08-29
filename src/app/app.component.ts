import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	imports: [RouterOutlet, TranslateDirective],
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	private readonly _httpService = inject(UserService);
}
