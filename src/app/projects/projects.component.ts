import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule]
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = projects;

  constructor() { }

  ngOnInit() {
  }

}

export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: 'Mon Portfolio',
    description: 'Un site web personnel pour présenter mes compétences et projets.',
    image: 'assets/images/project_portfolio.png',
    link: 'https://fleurantlucas.github.io/portfolio',
    tags: ['Angular', 'HTML/CSS', 'Responsive']
  },
  {
    title: 'Jeu de Cartes en Ligne',
    description: 'Un jeu de cartes multijoueur développé avec Angular et ASP.Net',
    image: '',
    link: '',
    tags: ['Angular', 'ASP.NET', 'École']
  },
  {
    title: 'Application de commande de nourriture',
    description: 'Une application mobile et web pour commander de la nourriture sur le campus du cegep',
    image: '',
    link: '',
    tags: ['Angular', 'ASP.NET', 'Flutter', 'École']
  },
  // ...ajoute plus ici
];
