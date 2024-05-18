import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() // esta anotacion se indica que la propiedad charactersList es un input y que puede ser recibida desde otro componente padre
  public charactersList: Character[] = [
    {
      name: 'Krillin',
      power: 5000,
    },
  ];
}
