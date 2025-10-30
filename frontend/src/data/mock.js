// Mock data for Eduardo's Portfolio

export const personalInfo = {
  name: "Eduardo Sumariva Salgado",
  role: "Desarrollador Web Full Stack",
  location: "Sanlúcar de Barrameda, Cádiz",
  email: "eduardosumarivasalgado@gmail.com",
  phone: "644919852",
  github: "https://github.com/JuanilloKing",
  linkedin: "https://linkedin.com/in/eduardo-sumariva-salgado",
  cvUrl: "https://customer-assets.emergentagent.com/job_95f2e6de-c70d-452a-8ac9-2666035cdeff/artifacts/2ejpuv48_CV-Sumariva-Salgado-Eduardo.pdf",
  about: "Desarrollador web apasionado por la tecnología y el aprendizaje continuo. Me especializo en desarrollo full stack con PHP, Java y Python. Me gusta trabajar en equipo, cumplir las metas y objetivos propuestos, destacando mi actitud positiva y motivación. Actualmente cursando desarrollo multiplataforma."
};

export const skills = [
  { name: "PHP", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Kotlin", category: "backend" },
  { name: "Dart", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "Laravel", category: "framework" },
  { name: "Inertia", category: "framework" },
  { name: "FastAPI", category: "framework" },
  { name: "Flutter", category: "framework" },
  { name: "Figma", category: "tools" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Git", category: "tools" }
];

export const education = [
  {
    id: 1,
    title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
    institution: "Albor Croft - Grupo Ilerna",
    period: "2025 - actualidad",
    type: "degree"
  },
  {
    id: 2,
    title: "Técnico Superior en Desarrollo de Aplicaciones Web",
    institution: "IES Doñana",
    period: "2022 - 2025",
    type: "degree"
  },
  {
    id: 3,
    title: "Bachillerato en Ciencias Tecnológicas",
    institution: "IES Cristóbal Colón",
    period: "2019 - 2022",
    type: "degree"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Cambridge English B1",
    issuer: "Cambridge",
    date: "Sep 2022"
  },
  {
    id: 2,
    title: "Protege tu empresa de los ciberataques",
    issuer: "Agencia Digital de Andalucía",
    date: "2024"
  },
  {
    id: 3,
    title: "Introducción y fundamentos de Big Data",
    issuer: "Agencia Digital de Andalucía",
    date: "2024"
  },
  {
    id: 4,
    title: "Introducción al hacking ético",
    issuer: "Agencia Digital de Andalucía",
    date: "2024"
  }
];

export const githubRepos = [
  {
    id: 1,
    name: "Gotaxi",
    description: "Aplicación web completa desarrollada con Laravel e Inertia para el proyecto final del ciclo formativo",
    language: "PHP",
    stars: 0,
    forks: 0,
    commits: 103,
    url: "https://github.com/JuanilloKing/GoTaxi",
    topics: ["laravel", "inertia", "php", "postgresql"]
  },
  {
    id: 2,
    name: "videojuego-laravel",
    description: "Pequeño proyecto hecho en laravel con liveware, sobre un videoclub de vieojuegos.",
    language: "PHP",
    stars: 0,
    forks: 0,
    commits: 2,
    url: "https://github.com/JuanilloKing/videojuego-laravel",
    topics: ["laravel", "php", "liveware", "postgresql"]
  },
  {
    id: 3,
    name: "proyecto-reactjs-final",
    description: "Pequeño proyecto que simula una tienda de cartas del videojuego 'Dragon Ball Dokkan Battle' ",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    commits: 3,
    url: "https://github.com/JuanilloKing/java-spring-app",
    topics: ["react", "vite", "JavaScript"]
  }
];

export const sortedGithubRepos = [...githubRepos].sort((a, b) => b.commits - a.commits);
