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
      description: 'Expérience avec Angular, typage fort, interfaces, et generics.',
      showDescription: false
    },
    {
      name: 'TypeScript', level: 8,
      description: 'Expérience avec Angular, typage fort, interfaces, et generics.',
      showDescription: false
    },
    {
      name: 'HTML', level: 9,
      description: 'Expérience avec Angular, typage fort, interfaces, et generics.',
      showDescription: false
    },
    {
      name: 'CSS', level: 6,
      description: 'Expérience avec Angular, typage fort, interfaces, et generics.',
      showDescription: false
    },
    {
      name: 'PHP', level: 7,
      description: 'Expérience avec Angular, typage fort, interfaces, et generics.',
      showDescription: false
    },
    {
      name: 'JavaScript', level: 6,
      description: 'Expérience avec Angular, typage fort, interfaces, et generics.',
      showDescription: false
    },
    {
      name: 'SQL', level: 8,
      description: 'Expérience avec Angular, typage fort, interfaces, et generics.',
      showDescription: false
    },
    {
      name: 'C#', level: 10,
      description: 'Expérience avec Angular, typage fort, interfaces, et generics.',
      showDescription: false
    },
    {
      name: 'ASP.NET', level: 10,
      description: 'Expérience avec Angular, typage fort, interfaces, et generics.',
      showDescription: false
    },
    {
      name: 'Android', level: 9,
      description: 'Expérience avec Angular, typage fort, interfaces, et generics.',
      showDescription: false
    },
    {
      name: 'Flutter', level: 9,
      description: 'Expérience avec Angular, typage fort, interfaces, et generics.',
      showDescription: false
    },
    {
      name: 'Java', level: 8,
      description: 'Expérience avec Angular, typage fort, interfaces, et generics.',
      showDescription: false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
