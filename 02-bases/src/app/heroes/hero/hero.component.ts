import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public heroName: string = 'Spider-Man';
  public realName: string = 'Peter Parker';
  public age: number = 24;
  public canFly: boolean = false;
  public superPowers: string[] = ['Super Strength', 'Web Slinging'];
  public address: any = {
    street: '123 Spider St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
  };

  // cuando se antepone de get, se convierte en una propiedad de solo lectura en el componente de Angular
  get capitalizedName(): string {
    return this.heroName.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${
      this.heroName
    } is a super hero with the following powers: ${this.superPowers.join(
      ', '
    )}`;
  }

  changeHero(): void {
    this.heroName = 'Iron-Man';
    this.realName = 'Tony Stark';
    this.changeSuperPowers();
  }

  public changeAge(): void {
    this.age = 45;
  }

  public changeSuperPowers(): void {
    this.superPowers = ['Super Strength', 'Flight', 'Energy Blasts'];
  }

  public resetForm(): void {
    this.heroName = 'Spider-Man';
    this.realName = 'Peter Parker';
    this.age = 24;
  }
}
