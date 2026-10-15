export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements?: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status?: string;
  description?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'eleva8e',
    role: 'MERN Stack Developer',
    company: 'Eleva8e Digital (formerly Digilink Ads)',
    period: 'February 2024 – Present',
    location: 'New Delhi, India',
    description:
      'Develop and maintain responsive web applications using React, Node.js, Express.js, and MongoDB. Implement new features, improve performance, integrate tools, and support quality assurance.',
    achievements: [
      'Improved website speed by 30% through optimization and assets refinement.',
      'Implemented 10 new features in React projects, improving UX scores by 15%.',
      'Performed 15+ quality checks on releases, reducing production bugs by 40%.',
      'Mentored five junior developers, improving team productivity by 20%.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST APIs', 'Git'],
  },
  {
    id: 'ravionics',
    role: 'Java Developer Intern',
    company: 'Ravionics',
    period: 'May 2023 – July 2023',
    location: 'India',
    description:
      'Developed a Java application using Spring Boot and provided technical solutions and support to the operations team.',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'MySQL'],
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    period: 'July 2026 – July 2028',
    status: 'Pursuing',
    description: 'Advanced studies in distributed systems, modern software architectures, and computer applications.',
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    period: 'January 2021 – December 2024',
    status: 'Completed',
    description: 'Specialization in Software Engineering, core data structures, algorithms, and application development.',
  },
];
