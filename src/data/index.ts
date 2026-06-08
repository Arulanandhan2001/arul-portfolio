import type { Project, Skill, Experience, Certification, Education } from './types';

export const personalInfo = {
  name: 'Arul K A',
  role: 'AI Engineer',
  philosophy: 'Engineering Intelligence Through Intelligence',
  email: 'arul_anandhan@yahoo.com',
  phone: '+91 9385396051',
  github: 'https://github.com/Arulanandhan2001',
  linkedin: 'https://www.linkedin.com/in/arulanandhan2001/',
  resumePath: './resume/Arul%20K%20A.pdf',
  profileImage: './images/arul.jpeg',
  typingRoles: ['AI Engineer', 'LLM Engineer', 'Generative AI Developer', 'Edge AI Enthusiast'],
  about: [
    'AI Engineer with hands-on experience in developing intelligent applications using Machine Learning, Deep Learning, Large Language Models, Retrieval-Augmented Generation, and Conversational AI technologies.',
    'Skilled in designing, fine-tuning, and deploying AI solutions across cloud and edge environments, with expertise in prompt engineering, information retrieval systems, computer vision, speech technologies, and AI model optimization.',
    'Passionate about transforming complex challenges into practical AI-driven solutions while embracing the philosophy of Engineering Intelligence Through Intelligence.',
  ],
};

export const journeySteps = [
  { label: 'Mechanical Engineering', icon: '⚙️', color: 'from-gray-500 to-gray-600' },
  { label: 'Data Science', icon: '📊', color: 'from-blue-500 to-blue-600' },
  { label: 'Machine Learning', icon: '🤖', color: 'from-cosmic-500 to-cosmic-600' },
  { label: 'AI Engineering', icon: '🧠', color: 'from-nebula-500 to-nebula-600' },
];

export const experience: Experience[] = [
  {
    company: 'App Innovation Technologies',
    location: 'Coimbatore, Tamil Nadu',
    role: 'AI Engineer',
    duration: 'Jun 2025 – Present',
    responsibilities: [
      'Developed and deployed AI-powered applications using Large Language Models, Retrieval-Augmented Generation, Conversational AI, Computer Vision, and Speech Technologies.',
      'Fine-tuned foundation models using domain-specific datasets and optimized AI solutions for cloud and edge deployment environments.',
      'Implemented prompt engineering, information retrieval systems, AI guardrails, and model optimization techniques for production-ready applications.',
      'Collaborated on the development of multimodal AI systems integrating Large Language Models, Computer Vision, and Speech Technologies.',
    ],
  },
];

export const skills: Skill[] = [
  { name: 'Python', category: 'Language' },
  { name: 'SQL', category: 'Language' },
  { name: 'Machine Learning', category: 'AI/ML' },
  { name: 'Deep Learning', category: 'AI/ML' },
  { name: 'Natural Language Processing', category: 'AI/ML' },
  { name: 'Large Language Models', category: 'AI/ML' },
  { name: 'Data Preprocessing & Feature Engineering', category: 'AI/ML' },
  { name: 'Hyperparameter Optimization', category: 'AI/ML' },
  { name: 'Prompt Engineering', category: 'AI/ML' },
  { name: 'Retrieval-Augmented Generation', category: 'AI/ML' },
  { name: 'Database Querying & Vector Databases', category: 'Data' },
  { name: 'AI Model Training & Fine-Tuning', category: 'AI/ML' },
  { name: 'Voice AI & Conversational AI Systems', category: 'AI/ML' },
  { name: 'Offline AI Model Deployment', category: 'DevOps' },
  { name: 'Web Scraping', category: 'Data' },
  { name: 'Git & Version Control', category: 'DevOps' },
  { name: 'Linux (Ubuntu)', category: 'DevOps' },
  { name: 'Microsoft Power BI', category: 'Analytics' },
  { name: 'Tableau', category: 'Analytics' },
  { name: 'Microsoft Excel', category: 'Analytics' },
  { name: 'Microsoft 365', category: 'Productivity' },
  { name: 'FastAPI', category: 'Framework' },
  { name: 'PyTorch', category: 'Framework' },
  { name: 'TensorFlow', category: 'Framework' },
  { name: 'OpenCV', category: 'Framework' },
  { name: 'Hugging Face', category: 'Framework' },
  { name: 'CUDA', category: 'Framework' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Power Connect',
    description:
      'Developed an intelligent document retrieval and conversational AI platform by processing web-scraped and enterprise data sources. Built Retrieval-Augmented Generation pipelines with hybrid retrieval mechanisms, applied prompt engineering techniques, implemented sentiment analysis and automated file generation workflows, and integrated large language models to deliver context-aware responses.',
    tags: ['LLM', 'RAG', 'Hybrid Retrieval', 'Prompt Engineering'],
    icon: '⚡',
  },
  {
    id: 2,
    title: 'RealityWorks AI',
    description:
      'Configured GPU-accelerated environments for offline deployment of speech and language models. Fine-tuned foundation models using domain-specific datasets, implemented speech enhancement techniques, integrated offline speech pipelines, and optimized inference workflows for local deployment scenarios.',
    tags: ['Speech AI', 'Fine-Tuning', 'Offline AI', 'CUDA'],
    icon: '🎙️',
  },
  {
    id: 3,
    title: 'Debris IQ (DDRP)',
    description:
      'Worked on extracting and processing roadway-related data for machine learning applications. Performed feature engineering, managed structured data storage using SQL databases, generated training datasets, developed Random Forest models, applied computer vision techniques for image classification, and integrated weather intelligence data.',
    tags: ['Machine Learning', 'Computer Vision', 'SQL', 'Random Forest'],
    icon: '🛣️',
  },
  {
    id: 4,
    title: 'Lingwell',
    description:
      'Developed a scenario-based conversational AI platform focused on interactive communication and speaking practice. Built scalable backend services using FastAPI, applied prompt engineering techniques, implemented AI guardrails, and enhanced conversational experiences through context-aware and adaptive interactions.',
    tags: ['FastAPI', 'Prompt Engineering', 'Conversational AI', 'AI Guardrails', 'NLP'],
    icon: '💬',
  },
  {
    id: 5,
    title: 'On Assist AI',
    description:
      'Contributed to the development of a multimodal AI assistant by integrating computer vision models for avatar generation, implementing voice-enabled interactions, and applying domain-specific guardrails to improve user experience and response reliability.',
    tags: ['Multimodal AI', 'Computer Vision', 'Voice AI'],
    icon: '🤖',
  },
  {
    id: 6,
    title: 'Jetson AI',
    description:
      'Developed and optimized AI solutions for NVIDIA Jetson edge devices by configuring CUDA-enabled environments and deployment pipelines. Built offline voice assistant capabilities, fine-tuned AI models using domain-specific datasets, and optimized inference performance for edge computing environments.',
    tags: ['Edge AI', 'Jetson', 'CUDA', 'Voice Assistant'],
    icon: '🔲',
  },
];

export const certifications: Certification[] = [
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM',
    type: 'Data Science Certification',
  },
];

export const education: Education[] = [
  {
    institution: 'Mahendra Engineering College',
    degree: 'Bachelor of Engineering',
    field: 'Mechanical & Automation Engineering',
    cgpa: '7.8',
  },
];
