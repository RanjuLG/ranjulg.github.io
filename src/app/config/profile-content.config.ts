export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceRole {
  role: string;
  company: string;
  duration: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface EducationRecord {
  title: string;
  duration: string;
  institution: string;
  details?: string;
}

export const PROFILE_CONTENT = {
  aboutSummary:
    'I am a Senior Software Engineer focused on building scalable, reliable products across web and cloud platforms. I specialize in modern .NET and Angular engineering, collaborate closely with product and QA teams, and convert complex business requirements into high-quality software. My strengths include system design thinking, clean architecture, and delivering maintainable solutions that create measurable business value.',

  skills: [
    {
      category: 'Backend Engineering',
      items: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework', 'REST API Design']
    },
    {
      category: 'Frontend Engineering',
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Cloud & DevOps',
      items: ['Azure App Service', 'Azure Functions', 'Azure SQL Database', 'Azure DevOps', 'GitHub Actions']
    },
    {
      category: 'Data & Persistence',
      items: ['SQL Server', 'MySQL', 'MongoDB']
    },
    {
      category: 'Tools & Workflow',
      items: ['Git', 'GitHub', 'GitLab', 'Jira', 'Agile/Scrum']
    }
  ] as SkillCategory[],

  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Softvil Technologies Pvt. Ltd.',
      duration: 'Jan 2026 - Present',
      startDate: '2026-01-01',
      endDate: 'present',
      isCurrent: true,
      location: 'Colombo, Sri Lanka',
      summary:
        'Deployed at John Keells IT to deliver enterprise-grade solutions for Teejay Lanka PLC.',
      responsibilities: [
        'Develop production-ready backend and web features using ASP.NET Core Web API and ASP.NET Core MVC.',
        'Translate business requirements into maintainable implementations aligned with clean architecture.',
        'Collaborate with business analysts and QA engineers to improve performance, reliability, and release quality.'
      ],
      achievements: [
        'Delivered Product Life Cycle Management System features used in daily enterprise operations.',
        'Improved delivery predictability with tighter engineering and QA collaboration.'
      ],
      technologies: ['ASP.NET Core 3.1', 'C#', '.NET', 'SQL Server', 'Angular']
    },
    {
      role: 'Software Engineer',
      company: 'DSP Engineering Solutions Pvt. Ltd.',
      duration: 'Aug 2023 - Oct 2025',
      startDate: '2023-08-01',
      endDate: '2025-10-01',
      location: 'Kandy, Sri Lanka',
      summary:
        'Built and delivered scalable building automation platforms for Singapore-based clients as a full-stack engineer.',
      responsibilities: [
        'Designed and developed end-to-end solutions using .NET, Angular, and SQL Server for enterprise facility operations.',
        'Worked across the full SDLC, from requirement analysis to deployment and production support.',
        'Engineered REST APIs and Windows services to improve integration quality and real-time processing.'
      ],
      achievements: [
        'Delivered EMS, MMS, and Facility Booking modules for large organizations in Singapore.',
        'Led production deployments to maintain high availability in live environments.'
      ],
      technologies: ['.NET', 'Angular', 'SQL Server', 'MongoDB', 'C#', 'TypeScript', 'Windows Service']
    }
  ] as ExperienceRole[],

  education: [
    {
      title: 'Master of Science in Computer Science (Reading)',
      duration: '2024 - Present',
      institution: 'Postgraduate Institute of Science, University of Peradeniya'
    },
    {
      title: 'Bachelor of the Science of Engineering Honours',
      duration: '2017 - 2023',
      institution: 'Faculty of Engineering, University of Peradeniya'
    },
    {
      title: 'GCE A/L Examination - Physical Science',
      duration: '2013 - 2016',
      institution: 'Ranabima Royal College, Peradeniya',
      details: 'Physics - A, Chemistry - A, Combined Maths - B'
    },
    {
      title: 'GCE O/L Examination',
      duration: '2007 - 2012',
      institution: 'Ranabima Royal College, Peradeniya',
      details: '8A, 1C'
    }
  ] as EducationRecord[]
};
