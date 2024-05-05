import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Counter: {{ counter }}</h1>
    <button (click)="increment()" style="margin: 2px">Increment</button>
    <button (click)="decrement()" style="margin: 2px">Decrement</button>
    <button (click)="resetCounter()" style="margin: 2px">Reset Counter</button>
    <br /><br />
    <button (click)="increaseBy(5)">Inncrease By 5</button>
    <br /><br />
    <hr />`,
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
