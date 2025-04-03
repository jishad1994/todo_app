import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo_app';
  public count: number = 0;

  oddOrEven: string = 'even';
  ngOnInit() {
    console.log('app compoonetn initialized');
  }

  setColor(): string {
    return 'red';
  }

  increaseCount(): void {
    this.count++;
  }
  decreaseCount(): void {
    this.count--;
  }
}
