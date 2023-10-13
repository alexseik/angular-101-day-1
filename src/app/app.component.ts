import { Component } from '@angular/core';
import { Candidate } from './models/candidate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'candidates-frontend';

  candidates: Candidate[] = [
    {
      id: 1,
      name: 'José Pérez',
      age: 25,
      position: 'Desarrollador Junior',
      experience: 1,
      skills: ['Java', 'SQL'],
    },
    {
      id: 2,
      name: 'Paco López',
      age: 40,
      position: 'Desarrollador Senior',
      experience: 15,
      skills: ['Java', 'SQL', 'Oracle', 'PL/SQL', 'Cobol', 'C++'],
    },
    {
      id: 3,
      name: 'Mireia García',
      age: 30,
      position: 'Desarrolladora Intermedia',
      experience: 4,
      skills: ['Java', 'SQL', 'Oracle', 'PL/SQL', 'Cobol', 'C++'],
    },
  ];
}
