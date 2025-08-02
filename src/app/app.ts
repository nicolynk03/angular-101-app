import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header],
  template: `
    <!-- <h1>Welcome to {{ title() }}!</h1>
    <p>Hello world!</p>

    <router-outlet /> -->

    <app-header/>
    <app-home/>
  `,
  styles: [`
    p {
      background-color: blue;
    }
    `],
})
export class App {
  protected readonly title = signal('angular-101-app');
}
