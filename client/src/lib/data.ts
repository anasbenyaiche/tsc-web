import { ServiceType, TeamMemberType, ERPModuleType, FeatureType } from "./types";

export const services: ServiceType[] = [
  {
    id: 1,
    title: "Accompagnement d'entreprise",
    icon: "fas fa-building",
    features: [
      "Évaluation approfondie de vos besoins numériques",
      "Identification des opportunités d'amélioration",
      "Consultation personnalisée pour votre stratégie de digitalisation",
      "Alignement sur vos objectifs commerciaux",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    title: "Digitalisation des services",
    icon: "fas fa-laptop-code",
    features: [
      "Conception d'applications mobiles conviviales",
      "Développement de plateformes web intuitives",
      "Intégration de fonctionnalités avancées",
      "Optimisation de l'expérience utilisateur",
    ],
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "Énergie & climat",
    icon: "fas fa-leaf",
    features: [
      "Optimisation de la consommation d'énergie",
      "Réduction de l'empreinte carbone",
      "Stratégies d'adaptation au changement climatique",
      "Solutions innovantes et durables",
    ],
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    title: "Data Warehouse",
    icon: "fas fa-database",
    features: [
      "Gestion des données volumineuses",
      "Ingénierie des données",
      "Optimisation des coûts d'infrastructure",
      "Sécurisation et maintenance des data warehouses",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 5,
    title: "Data Science",
    icon: "fas fa-brain",
    features: [
      "Compétence en sciences des données",
      "Intégration de l'intelligence artificielle (AI)",
      "Modèles prédictifs et analytiques",
      "Automatisation des processus via l'IA",
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 6,
    title: "Data Analysis",
    icon: "fas fa-chart-bar",
    features: [
      "Gestion du volume croissant des données",
      "Visualisation des données",
      "Intégration des analyses dans les processus",
      "Tableaux de bord interactifs",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80",
  }
];
export const whyChooseUs: FeatureType[] = [
  {
    id: 1,
    title: "Accompagnement personnalisé",
    description: "Bénéficiez d'un accompagnement personnalisé, de la part de nos experts pour répondre précisément à vos besoins.",
    icon: "fas fa-check",
  },
  {
    id: 2,
    title: "Sécurité et confidentialité",
    description: "Nous assurons la protection de vos données et respectons scrupuleusement la confidentialité de vos informations.",
    icon: "fas fa-lock",
  },
  {
    id: 3,
    title: "Optimisation des coûts",
    description: "Dépensez moins de temps et d'argent grâce à nos solutions efficaces et adaptées à votre budget.",
    icon: "fas fa-chart-line",
  }
];

export const erpFeatures: FeatureType[] = [
  {
    id: 1,
    title: "Gestion des stocks",
    description: "Contrôle d'inventaire précis",
    icon: "fas fa-tasks",
  },
  {
    id: 2,
    title: "Gestion des entrepôts",
    description: "Organisation optimale",
    icon: "fas fa-warehouse",
  },
  {
    id: 3,
    title: "Fabrication MRP",
    description: "Planification des ressources",
    icon: "fas fa-industry",
  },
  {
    id: 4,
    title: "Comptabilité",
    description: "Gestion financière complète",
    icon: "fas fa-calculator",
  },
  {
    id: 5,
    title: "Facturation",
    description: "Automatisation des factures",
    icon: "fas fa-file-invoice-dollar",
  },
  {
    id: 6,
    title: "Planification",
    description: "Organisation efficace",
    icon: "fas fa-calendar-alt",
  }
];

export const erpModules: ERPModuleType[] = [
  { id: 1, name: "CRM", icon: "fas fa-users" },
  { id: 2, name: "E-Commerce", icon: "fas fa-shopping-cart" },
  { id: 3, name: "Inventory", icon: "fas fa-boxes" },
  { id: 4, name: "Production", icon: "fas fa-cogs" },
  { id: 5, name: "HR & Admin", icon: "fas fa-user-tie" },
  { id: 6, name: "Sales", icon: "fas fa-handshake" }
];

export const teamMembers: TeamMemberType[] = [
  {
    id: 1,
    name: "Expert en Énergie & Digital",
    title: "Consultant en énergie et digitalisation",
    description: "Spécialisé dans la transition énergétique et la digitalisation, notre expert vous guide dans l'adoption de technologies innovantes pour optimiser votre consommation d'énergie.",
    image: "/assets/images/mongi-profil-pic.jpg"
  },
  {
    id: 2,
    name: "Expert en Management",
    title: "Consultant en entrepreneuriat et management",
    description: "Avec une expertise en création d'entreprise et en gestion, notre consultant vous aide à développer des stratégies efficaces pour optimiser vos processus et votre rentabilité.",
    image: "/assets/images/profile-pic.jpeg"
  },
  {
    id: 3,
    name: "Experte en Marketing",
    title: "Consultante en entrepreneuriat et marketing",
    description: "Notre spécialiste combine des compétences en entrepreneuriat et en marketing pour vous accompagner dans le lancement et la promotion de vos services digitaux.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
  }
];
