import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { PROFILE_CONFIG } from '../../config/profile.config';

interface ListItem {
  icon?: string;
  label: string;
}

interface CareerItem {
  role: string;
  company: string;
  period: string;
  description?: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected readonly config = PROFILE_CONFIG;
  protected readonly photoUrl = 'me.webp';
  protected readonly degrees = 'BSc (Eng) Hons, MSc (Reading)';
  protected readonly bio =
    'Senior Software Engineer with 3+ years of experience designing and scaling full-stack enterprise applications with .NET, Angular, and Cloud Architecture.';

  protected readonly interests: ListItem[] = [
    { icon: '💻', label: 'Full-Stack Architecture' },
    { icon: '☁️', label: 'Cloud & Microservices' },
    { icon: '⚡', label: 'High-Performance APIs' },
    { icon: '🎨', label: 'Modern UI/UX Design' },
    { icon: '🗄️', label: 'Database Optimization' },
    { icon: '🔄', label: 'Event-Driven Systems' }
  ];

  protected readonly skills: ListItem[] = [
    { icon: '⚡', label: '.NET & ASP.NET Core' },
    { icon: '🅰️', label: 'Angular & TypeScript' },
    { icon: '☁️', label: 'Azure & Cloud DevOps' },
    { icon: '🗄️', label: 'SQL Server & PostgreSQL' },
    { icon: '🐳', label: 'Docker & Microservices' },
    { icon: '🔄', label: 'RabbitMQ & MassTransit' },
    { icon: '🏗️', label: 'Clean Architecture & REST' }
  ];

  protected readonly career: CareerItem[] = [
    {
      role: 'Senior Software Engineer',
      company: 'The Maintenance Master',
      period: 'June 2026 - Present'
    },
    {
      role: 'Senior Software Engineer',
      company: 'Softvil Technologies (John Keells IT)',
      period: 'Jan 2026 - May 2026'
    },
    {
      role: 'Software Engineer',
      company: 'DSP Engineering Solutions',
      period: 'Aug 2023 - Oct 2025'
    }
  ];

  protected readonly socialLinks = [
    {
      name: 'GitHub',
      url: PROFILE_CONFIG.social.github,
      bgColor: '#181717',
      icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'
    },
    {
      name: 'LinkedIn',
      url: PROFILE_CONFIG.social.linkedin,
      bgColor: '#0A66C2',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    },
    {
      name: 'Email',
      url: `mailto:${PROFILE_CONFIG.personal.email}`,
      bgColor: '#EA4335',
      icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
    }
  ];

  constructor(
    private seoService: SeoService
  ) {
    this.seoService.updateMetaTags({
      title: 'Home',
      description: 'Senior Software Engineer specializing in .NET and Angular. Building exceptional digital experiences.',
      slug: ''
    });
  }

}
