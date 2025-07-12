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
  { name: 'Angular', level: 8 },
  { name: 'TypeScript', level: 8 },
  { name: 'HTML', level: 9 },
  { name: 'CSS', level: 6 },
  { name: 'PHP', level: 7 },
  { name: 'JavaScript', level: 6 },
  { name: 'SQL', level: 8 },
  { name: 'C#', level: 10 },
  { name: 'ASP.NET', level: 10 },
  { name: 'Android Studio', level: 9 },
  { name: 'Flutter', level: 9 },
  { name: 'Java', level: 8 },
];

  constructor() { }

  ngOnInit() {
  }

}
