export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  type: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  cgpa: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
