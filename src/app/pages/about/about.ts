import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_CONTENT } from '../../config/profile-content.config';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  protected readonly summary = PROFILE_CONTENT.aboutSummary;

  protected readonly strengths = [
    {
      title: 'Solution-Oriented Engineering',
      description: 'I design practical solutions that balance code quality, delivery speed, and long-term maintainability.'
    },
    {
      title: 'Full-Stack Ownership',
      description: 'From API design to frontend UX, I build cohesive systems with clear architecture and strong reliability.'
    },
    {
      title: 'Collaborative Delivery',
      description: 'I work closely with product, QA, and engineering teams to ship features that solve real business needs.'
    }
  ];
}
