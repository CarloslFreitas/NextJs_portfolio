import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    Image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    width: 80,
    height: 80,
  },
  {
    name: "NextJs",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    width: 90,
    height: 90,
  },
  {
    name: "Postgres",
    Image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    width: 90,
    height: 90,
  },
];

export const Socials = [
  {
    name: "GitHub",
    src: "/github.png",
    link: "https://github.com/CarloslFreitas",
  },
  {
    name: "Linkedin",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    link: "https://www.linkedin.com/in/carlos-henrique-freitas-de-almeida/",
  },
];
export const Projects = [
  {
    title: "Agenda Tech FullStack",
    text: "Aplicação Web Construida em React, no intuito de realizar cadastros e login de usuários para que possam salvar contatos na Agenda e exporta-los em pdf.",
    src: "/agendatech.png",
    src2: "/agendatech2.png",
    githubRepo:
      "https://github.com/CarloslFreitas/NestJs-BackEnd-AgendaTech_API",
    deploy: "https://m6-fullstack-tech-frontend-carlosl-freitas.vercel.app",
  },
  {
    title: "Agenda Tech API",
    text: "Uma API construida em NestJs para gerenciamento de contatos, possui rotas para Login e Cadastro para que cada usário tenha sua própria agenda online.",
    src: "/apicontact.png",
    src2: "",
    githubRepo:
      "https://github.com/CarloslFreitas/NestJs-BackEnd-AgendaTech_API",
    deploy: "",
  },
  {
    title: "Projeto JOBS",
    text: "Aplicação para divulgar vagas de emprego, Login e Cadastro de empresas, CRUD para Vagas e listagem de aplicações para a vaga especifica.",
    src: "/jobs.png",
    src2: "/jobs2.png",
    githubRepo: "https://github.com/Projeto-Jobs/group9-jobs",
    deploy: "https://jobs-five.vercel.app",
  },
  {
    title: "Kenzie Hub",
    text: "Aplicação Web feito em React, possibilita Cadastro e login de usuários para que possam cadastrar tecnologias e seu nivel de conhecimento.",
    src: "/kenzie_hub.png",
    src2: "/kenzie_hub2.png",
    githubRepo: "https://github.com/CarloslFreitas/react-kenzie-hub",
    deploy: "https://react-entrega-kenzie-hub-carlosl-freitas.vercel.app",
  },
  {
    title: "Burguer Kenzie",
    text: "Aplicação Web feito em React, simulação de um E-commerce de lanches online, com adição de produtos ao carrinho e filtro de busca.",
    src: "/amburgueria.png",
    src2: "",
    githubRepo: "https://github.com/CarloslFreitas/react-template-hamburgueria",
    deploy:
      "https://react-entrega-s3-template-hamburgueria-carlosl-freitas.vercel.app",
  },
  {
    title: "NuKenzie",
    text: "Aplicação Web feito em React, Gerenciador de finanças, onde o usuario pode informar valores de entrada e saida e ter um resumo de gastos.",
    src: "/nu_kenzie.png",
    src2: "",
    githubRepo: "https://github.com/CarloslFreitas/react-template-nu-kenzie",
    deploy:
      "https://react-entrega-s1-template-nu-kenzie-carlosl-freitas.vercel.app",
  },
];
export const Contacts = [
  {
    title: "WhatsApp",
    img: "/phonew.png",
    description:
      "Me ligue ou me envie uma mensagem com propostas e/ou feedbacks.",
    link: "Vamos Conversa",
    url: "https://w.app/NIFxnm",
  },
  {
    title: "Email",
    img: "/mail.png",
    description: "Envie-me um email com feedbacks, sugestões e ideias.",
    link: "Me envie um email",
    url: "mailto:carlos.d.freitas0@hotmail.com",
  },
  {
    title: "Linkedin",
    img: "/linkedin.png",
    description: "Acesse meu perfil no Linkedin e vamos nos conectar!",
    link: "Acesse meu Linkedin",
    url: "https://www.linkedin.com/in/carlos-henrique-freitas-de-almeida/",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
