import { Component, OnInit } from '@angular/core';
import {Hero} from'../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero ={
    id: 1,
    name:'Deadpool',
    edad: 25,
    poder: 'inmortal, habilidad para pelear',
    identidad: 'Wade Wilson',
    universo: 'Marvel'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
