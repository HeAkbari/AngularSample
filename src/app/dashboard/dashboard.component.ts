import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
heroes:Hero[]=[];
selectedHero:Hero;
  constructor(private heroeService:HeroService) { }

  ngOnInit() {
  this.getHeroes();
  }
  onSelected(selectedHero:Hero):void{
    this.selectedHero=selectedHero;
  }
  getHeroes():void{
    this.heroeService.getHeroes()
    //.subscribe(heroes=>this.heroes=heroes);
    .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }

}
