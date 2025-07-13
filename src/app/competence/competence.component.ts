import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css'],
  imports: [CommonModule],
})
export class CompetenceComponent implements OnInit {

  skills = [
    {
      name: 'Angular', level: 8,
      description: 'Plusieurs applications web, autant fonctionnant seul que avec un api. Plusieurs sessions de cegep ont été dédié à ce framework pour nos projects webs',
      showDescription: false
    },
    {
      name: 'TypeScript', level: 8,
      description: 'Provient de mon expérience avec angular. Je ne l\'ai jamais utiliser dans un autre contexte par contre.',
      showDescription: false
    },
    {
      name: 'HTML', level: 9,
      description: 'Utilisé pendant l\'entièreté de mon cegep.',
      showDescription: false
    },
    {
      name: 'CSS', level: 6,
      description: 'Je l\'adore autant que je le déteste. Encore une fois, utilisé lors de mon DEC au cegep',
      showDescription: false
    },
    {
      name: 'PHP', level: 7,
      description: 'J\'ai appris le langage sur le tas lors de mon stage de fin d\'étude. Il s\'agit du langage principal de mon emploi actuel. Je l\'ai beaucoups utiliser en tant que backend pour des applications web.',
      showDescription: false
    },
    {
      name: 'JavaScript', level: 6,
      description: 'Un peu vu au cegep, mais beaucoup utiliser lors de mon stage. Je l\'utilise en majorité pour manipuler des éléments html et surtout l\'utilisation de libraries js.',
      showDescription: false
    },
    {
      name: 'SQL', level: 8,
      description: 'Utilisé pendant l\'entièreté de mon cegep.',
      showDescription: false
    },
    {
      name: 'C#', level: 10,
      description: 'Premier langage que j\'ai apprit. Perfectionné pendant 3 ans de cegep. Il s\'agit du langage que je préfère et dont je suis le plus doué. J\'ai ai codé beaucoups d\'applications web MVC et des api.',
      showDescription: false
    },
    {
      name: 'ASP.NET', level: 10,
      description: 'Il s\'agit du framwork que j\'ai utiliser lors de mon cegep pour construire des applications web et des api en C#. Le meilleur outil de mon arsenal.',
      showDescription: false
    },
    {
      name: 'Android', level: 9,
      description: 'J\'ai fait plusieurs applications mobiles dans le cadres de mes cours de cegep.',
      showDescription: false
    },
    {
      name: 'Flutter', level: 9,
      description: 'J\'aime beaucoup flutter, je trouve que c\'est mieux qu\'une application mobile classique. Mon projet de fin d\'étude a été fait avec Flutter',
      showDescription: false
    },
    {
      name: 'Java', level: 8,
      description: 'Je l\'ai apprit lorsque j\'apprennais Android Studio. J\'ai aussi fait quelques applications console et un api.',
      showDescription: false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
