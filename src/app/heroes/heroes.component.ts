import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero ={
  //   id: 1,
  //   name: "Windstorm"
  // }
  heroes: Hero[];
  //heroes = HEROES;
  selectedHero: Hero;

  constructor( private heroService: HeroService,
     private messageService: MessageService ) { }
  
  //life cycle hook
  //call this hook after the creation of component,
  // this is very good for initialized logic.
  ngOnInit(): void { 
    //not better way to call getHeroes function in the Constracter
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroseComponent: Selected hero id=${ hero.id }`);
  }
  getHeroes(): void{
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  //hero = 'Windstrom'; <- Write wrong area??

}
