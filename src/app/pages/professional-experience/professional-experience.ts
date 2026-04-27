import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceRole, PROFILE_CONTENT } from '../../config/profile-content.config';

@Component({
  selector: 'app-professional-experience',
  imports: [CommonModule],
  templateUrl: './professional-experience.html',
  styleUrl: './professional-experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalExperienceComponent {
  protected readonly experience = PROFILE_CONTENT.experience;

  protected getYearLabel(item: ExperienceRole): string {
    const startYear = new Date(item.startDate).getFullYear();
    const isPresent = item.endDate.toLowerCase() === 'present';
    const endYear = isPresent ? 'Now' : new Date(item.endDate).getFullYear();
    return `${startYear} - ${endYear}`;
  }

  protected formatDuration(item: ExperienceRole): string {
    const start = new Date(item.startDate);
    const end = item.endDate.toLowerCase() === 'present' ? new Date() : new Date(item.endDate);

    const totalMonths = Math.max(0, (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()));
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts: string[] = [];
    if (years > 0) {
      parts.push(`${years} yr${years > 1 ? 's' : ''}`);
    }
    if (months > 0) {
      parts.push(`${months} mo${months > 1 ? 's' : ''}`);
    }

    return parts.length ? `${item.duration} (${parts.join(' ')})` : item.duration;
  }
}
