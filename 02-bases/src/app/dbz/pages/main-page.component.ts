import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  public characteres: Character[] = [
    { name: 'Goku', power: 15000 },
    { name: 'Vegeta', power: 7500 },
    { name: 'Trunks', power: 6000 },
    { name: 'Gohan', power: 14000 },
  ];
}
