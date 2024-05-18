import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output('newCharacter')
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  public emmitCharacter(): void {
    console.log(this.character);
    // this.character.name = '';
    // this.character.power = 0;

    // si el nombre esta vacio no se emite el evento
    if (this.character.name.trim().length === 0) return;
    // los ... son para romper la referencia esto es para que no se modifique el objeto original
    // y se cree uno nuevo
    this.onNewCharacter.emit({ ...this.character });

    this.character = {
      name: '',
      power: 0,
    };
  }
}
