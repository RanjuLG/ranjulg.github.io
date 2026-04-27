import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_CONTENT } from '../../config/profile-content.config';

@Component({
  selector: 'app-education-certifications',
  imports: [CommonModule],
  templateUrl: './education-certifications.html',
  styleUrl: './education-certifications.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationCertificationsComponent {
  protected readonly education = PROFILE_CONTENT.education;
}
