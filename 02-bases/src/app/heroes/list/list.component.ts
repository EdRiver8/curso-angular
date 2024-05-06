import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroes: string[] = [
    'Spider-Man',
    'Iron-Man',
    'Hulk',
    'Thor',
    'Black Widow',
  ];
  public deletedHero?: string;

  public removeLastHero(): void {
    this.deletedHero = this.heroes.pop();
  }

  public addHero(hero: string): void {
    this.heroes.push(hero);
  }

  public removeHero(index: number): void {
    this.heroes.splice(index, 1);
  }
}
