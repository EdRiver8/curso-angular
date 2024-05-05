import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Counter</h1>`,
  styles: ['h1 { color: red; }'],
})
export class CounterComponent {
  public counter: number = 0;

  public increment(): void {
    this.counter++;
  }

  public decrement(): void {
    this.counter--;
  }

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public resetCounter(): void {
    this.counter = 0;
  }
}
