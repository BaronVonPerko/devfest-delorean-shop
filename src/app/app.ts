import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Toolbar} from './components/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar],
  template: `
    <app-toolbar />

    <router-outlet />
  `,
  styles: [],
})
export class App {
}
