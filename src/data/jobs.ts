export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements: string[];
  postedDate: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "₦400,000",
    type: "Full-time",
    description:
      "Build and maintain responsive user interfaces using React and TypeScript. Collaborate with designers and backend engineers to deliver delightful user experiences.",
    requirements: [
      "3+ years of React experience",
      "Proficiency in TypeScript",
      "Familiarity with REST APIs",
      "Strong CSS/SCSS skills",
    ],
    postedDate: "2026-05-20",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Dev Solutions",
    location: "Enugu",
    salary: "₦300,000",
    type: "Full-time",
    description:
      "Design and implement scalable server-side applications using Node.js and Express. Manage databases, write APIs, and ensure system reliability.",
    requirements: [
      "Experience with Node.js & Express",
      "PostgreSQL / MongoDB knowledge",
      "Understanding of RESTful design",
      "Git version control",
    ],
    postedDate: "2026-05-18",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Lagos",
    salary: "₦350,000",
    type: "Full-time",
    description:
      "Create intuitive, visually stunning interfaces for web and mobile products. Conduct user research and translate findings into wireframes and prototypes.",
    requirements: [
      "Proficiency in Figma or Sketch",
      "Understanding of design systems",
      "User research experience",
      "Portfolio of shipped products",
    ],
    postedDate: "2026-05-17",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Cloud Nine Ltd",
    location: "Remote",
    salary: "₦500,000",
    type: "Contract",
    description:
      "Automate infrastructure provisioning and manage CI/CD pipelines. Monitor production systems and ensure high availability across cloud platforms.",
    requirements: [
      "AWS / GCP / Azure experience",
      "Docker & Kubernetes",
      "CI/CD pipeline management",
      "Linux administration",
    ],
    postedDate: "2026-05-15",
  },
  {
    id: 5,
    title: "Mobile Developer",
    company: "AppFactory",
    location: "Abuja",
    salary: "₦450,000",
    type: "Full-time",
    description:
      "Develop cross-platform mobile applications using React Native. Work closely with product managers to ship features on tight schedules.",
    requirements: [
      "React Native proficiency",
      "iOS & Android deployment experience",
      "State management (Redux/Zustand)",
      "API integration skills",
    ],
    postedDate: "2026-05-14",
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "Insight Analytics",
    location: "Lagos",
    salary: "₦280,000",
    type: "Full-time",
    description:
      "Analyse business data to drive strategic decisions. Build dashboards, generate reports, and uncover trends that impact company growth.",
    requirements: [
      "SQL and Excel mastery",
      "Experience with Power BI or Tableau",
      "Statistical analysis skills",
      "Strong communication",
    ],
    postedDate: "2026-05-12",
  },
  {
    id: 7,
    title: "Product Manager",
    company: "Startup Hub",
    location: "Remote",
    salary: "₦600,000",
    type: "Full-time",
    description:
      "Own the product roadmap end-to-end. Prioritise features, coordinate cross-functional teams, and ensure successful launches that delight users.",
    requirements: [
      "3+ years in product management",
      "Agile/Scrum methodology",
      "Data-driven decision making",
      "Excellent stakeholder management",
    ],
    postedDate: "2026-05-10",
  },
  {
    id: 8,
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Port Harcourt",
    salary: "₦550,000",
    type: "Full-time",
    description:
      "Monitor and defend organizational systems against cyber threats. Perform vulnerability assessments, incident response, and security audits.",
    requirements: [
      "Knowledge of SIEM tools",
      "Network security fundamentals",
      "Incident response experience",
      "Security certifications (CEH, CompTIA Security+)",
    ],
    postedDate: "2026-05-08",
  },
  {
    id: 9,
    title: "Technical Writer",
    company: "DocuCraft",
    location: "Remote",
    salary: "₦200,000",
    type: "Part-time",
    description:
      "Produce clear, concise technical documentation for APIs, SDKs, and developer tools. Collaborate with engineers to ensure accuracy and usability.",
    requirements: [
      "Excellent written English",
      "Familiarity with Markdown & docs-as-code",
      "Ability to read code (JavaScript/Python)",
      "Attention to detail",
    ],
    postedDate: "2026-05-06",
  },
  {
    id: 10,
    title: "QA Engineer",
    company: "BugBusters Inc",
    location: "Ibadan",
    salary: "₦320,000",
    type: "Full-time",
    description:
      "Design and execute test plans for web applications. Write automated tests, track defects, and work with developers to ensure quality releases.",
    requirements: [
      "Experience with Cypress or Playwright",
      "Manual & automated testing",
      "Bug tracking tools (Jira, Linear)",
      "Understanding of CI/CD workflows",
    ],
    postedDate: "2026-05-04",
  },
  {
    id: 11,
    title: "Machine Learning Engineer",
    company: "AI Frontier",
    location: "Lagos",
    salary: "₦700,000",
    type: "Full-time",
    description:
      "Develop and deploy machine learning models for production systems. Collaborate with data scientists to translate research into scalable solutions.",
    requirements: [
      "Python & TensorFlow/PyTorch",
      "MLOps & model deployment",
      "Strong math/statistics background",
      "Experience with large datasets",
    ],
    postedDate: "2026-05-02",
  },
  {
    id: 12,
    title: "Blockchain Developer",
    company: "Web3 Labs",
    location: "Remote",
    salary: "₦650,000",
    type: "Contract",
    description:
      "Build decentralized applications and smart contracts on Ethereum and Solana. Integrate wallet solutions and ensure secure transaction handling.",
    requirements: [
      "Solidity / Rust for smart contracts",
      "Web3.js / Ethers.js",
      "Understanding of DeFi protocols",
      "Security best practices",
    ],
    postedDate: "2026-04-30",
  },
];

export default jobs;
