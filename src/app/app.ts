import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Shell } from './shared/shell/shell';
@Component({
  selector: 'app-root',
  imports: [ Shell],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BigDataDashboard');
}
