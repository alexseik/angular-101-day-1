import { Component, Input } from '@angular/core';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
})
export class CandidateComponent {
  @Input() candidate!: Candidate;

  doEdit = () => {
    alert(`You want to edit this candidate: ${this.candidate.name}`);
  };

  candidateClasses() {
    return {
      'candidate-card': true,
      senior: this.candidate.experience < 3,
      junior: this.candidate.experience > 5,
    };
  }

  getColor() {
    if (this.candidate.experience <= 5) {
      return 'black';
    }
    return 'white';
  }
}
