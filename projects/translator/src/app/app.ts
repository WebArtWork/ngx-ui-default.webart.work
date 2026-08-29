import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrTopbar } from './layout/topbar/tr-topbar';

@Component({
	selector: 'tr-root',
	imports: [RouterOutlet, TrTopbar],
	templateUrl: './app.html',
})
export class App {}
