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
}
