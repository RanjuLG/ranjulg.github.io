import { Component } from '@angular/core';
import { HomeComponent } from '../home/home';
import { AboutComponent } from '../about/about';
import { SkillsTechnologiesComponent } from '../skills-technologies/skills-technologies';
import { ProfessionalExperienceComponent } from '../professional-experience/professional-experience';
import { EducationCertificationsComponent } from '../education-certifications/education-certifications';
import { ProjectsComponent } from '../projects/projects';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from '../contact/contact';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-main-layout',
  imports: [
    HomeComponent,
    AboutComponent,
    SkillsTechnologiesComponent,
    ProfessionalExperienceComponent,
    EducationCertificationsComponent,
    ProjectsComponent,
    BlogComponent,
    ContactComponent
  ],
  template: `
    <section id="home">
      <app-home></app-home>
    </section>

    <section id="about">
      <app-about></app-about>
    </section>

    <section id="skills">
      <app-skills-technologies></app-skills-technologies>
    </section>

    <section id="experience">
      <app-professional-experience></app-professional-experience>
    </section>

    <section id="education">
      <app-education-certifications></app-education-certifications>
    </section>

    <section id="projects">
      @defer (on viewport) {
        <app-projects></app-projects>
      } @placeholder {
        <div class="section-placeholder">Loading Projects...</div>
      }
    </section>

    <section id="blog">
      @defer (on viewport) {
        <app-blog></app-blog>
      } @placeholder {
        <div class="section-placeholder">Loading Blog...</div>
      }
    </section>

    <section id="contact">
      @defer (on viewport) {
        <app-contact></app-contact>
      } @placeholder {
        <div class="section-placeholder">Loading Contact...</div>
      }
    </section>
  `,
  styles: [`
    .section-placeholder {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      font-size: 1.2rem;
    }
    
    /* Anchor offset fix - creates invisible space above sections */
    section[id] {
      padding-top: 80px;
      margin-top: -80px;
    }
    
    /* First section doesn't need the offset since it's already at top */
    section#home {
      padding-top: 0;
      margin-top: 0;
    }
  `]
})
export class MainLayoutComponent {
  constructor(private seoService: SeoService) {
    this.seoService.updateMetaTags({
      title: 'Senior Software Engineer Portfolio',
      description: 'Senior Software Engineer portfolio featuring about, skills, professional experience, projects, blog, and contact details.',
      slug: ''
    });
  }
}
