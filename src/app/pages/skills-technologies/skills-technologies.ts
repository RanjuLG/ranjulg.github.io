import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_CONTENT } from '../../config/profile-content.config';

@Component({
  selector: 'app-skills-technologies',
  imports: [CommonModule],
  templateUrl: './skills-technologies.html',
  styleUrl: './skills-technologies.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsTechnologiesComponent {
  protected readonly skills = PROFILE_CONTENT.skills;
}
