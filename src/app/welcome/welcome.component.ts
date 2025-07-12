import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AproposComponent } from "../apropos/apropos.component";
import { CompetenceComponent } from "../competence/competence.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('slideIn', [
      state('out', style({ transform: 'translateX(-100%)' })),
      state('in', style({ transform: 'translateX(0%)' })),
      transition('out => in', animate('300ms ease-in'))
    ])
  ],
  imports: [AproposComponent, CompetenceComponent, ContactComponent]
})
export class WelcomeComponent implements OnInit {

  animationState = 'out';
  constructor() { }

  ngOnInit() {
    // Trigger animation after component loads
    setTimeout(() => {
      this.animationState = 'in';
    }, 100);
  }

}
