// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

import chatgptLogo from "./assets/tech_logo/netlify.png";
import claudeLogo from "./assets/tech_logo/netlify.png";
import copilotLogo from "./assets/tech_logo/netlify.png";

// Experience Section Logo's

// Education Section Logo's
import nifftlogo from "./assets/education_logo/NIFFT.png";
import MGSlogo from "./assets/education_logo/MGS_logo.png";
import StJosephlogo from "./assets/education_logo/St_Joseph_logo.jpg";

// Project Section Logo's
import krishbazaarimg from "./assets/work_logo/krishbazaar_hero_banner_v2.png";
import antarnaadimg from "./assets/work_logo/antarnaad_hero_banner.png";
import careerfitcopilot from "./assets/work_logo/genAicopilot.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "ChatGPT", logo: chatgptLogo },
      { name: "Claude AI", logo: claudeLogo },
      { name: "GitHub Copilot", logo: copilotLogo },
      { name: "Prompt Engineering", logo: chatgptLogo },
      { name: "AI Debugging", logo: copilotLogo },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      // { name: "Postman", logo: postmanLogo },
      // { name: "Compass", logo: mcLogo },
      // { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: 'src/assets/company_logo/WiproLogo.png', // Replace with your actual import variable name
    role: "Senior Software Engineer",
    company: "Wipro",
    date: "May 2025 – May 2026",
    responsibilities: [
      "Architected 6+ scalable frontend modules using React.js 18 with custom Hooks, reducing re-renders by 40% through useMemo, useCallback, and React.memo.",

      "Implemented React.lazy, Suspense code splitting, and react-window virtualization, boosting Lighthouse scores by 30%+ and reducing initial bundle size by 22%.",

      "Designed a Redux Toolkit + RTK Query store for 3 feature modules, eliminating 60% of redundant API calls through server-state caching.",

      "Built Node.js/Express.js REST microservices backed by MongoDB using Mongoose ODM and aggregation pipelines, reducing API response latency by 25%.",

      "Improved Jenkins CI/CD pipelines using Groovy scripting, reducing deployment cycle time by 35% with zero-downtime releases.",

      "Led Agile/Scrum ceremonies for a team of 6 engineers, contributing to a 20% reduction in post-release defects.",
    ],

    skills: [
      "React.js",
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redux Toolkit",
      "RTK Query",
      "React Hooks",
      "React.lazy",
      "Suspense",
      "react-window",
      "Jenkins",
      "Groovy",
      "REST APIs",
      "MERN Stack",
    ],
  },

  {
    id: 1,
    img: 'src/assets/company_logo/BajajLogo.jpeg', // Replace with your actual import variable name
    role: "Software Engineer",
    company: "Bajaj Finserv",
    date: "July 2023 – May 2025",
    responsibilities: [
      "Delivered 5 critical product features end-to-end across the full SDLC using the MERN Stack, improving team delivery efficiency by 20%.",

      "Built a reusable React.js component library with 15+ TypeScript and CSS Modules components, adopted by 3 product teams and accelerating development by approximately 40%.",

      "Developed Node.js/Express.js microservices with MongoDB for loan processing and account management, securing 1M+ transactions using JWT authentication and RBAC with zero critical incidents.",

      "Implemented Redis caching and centralized error-handling middleware in Node.js/Express.js services, reducing API error rates by 35%.",

      "Partnered with backend teams on SQL-based reporting using MySQL and PostgreSQL alongside MongoDB services.",

      "Used Jira for sprint tracking and Postman for API testing within Agile development cycles.",
    ],

    skills: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redux Toolkit",
      "Redis",
      "JWT",
      "RBAC",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Postman",
      "Jira",
      "MERN Stack",
    ],
  },

  {
    id: 2,
    img: 'src/assets/company_logo/KPMGLogo.png', // Replace with your actual import variable name
    role: "Programming Analyst",
    company: "KPMG India",
    date: "March 2021 – June 2023",

    responsibilities: [
      "Developed 8+ enterprise web modules for audit clients using React.js and TypeScript while maintaining 100% compliance with data security standards.",

      "Built multi-step React Hook Form workflows with Yup validation, reducing manual data processing time by 30% for compliance audit teams.",

      "Resolved 12+ performance bottlenecks using bundle splitting, memoization, and debouncing, improving application responsiveness by 45% across 3 client projects.",

      "Integrated Node.js/Express.js backend services with MongoDB for audit data storage and retrieval, supporting 500+ concurrent users.",

      "Mentored 4 junior developers on React.js architecture, MongoDB data modeling, and TypeScript best practices, reducing code review cycles by 25%.",

      "Used Git, Jira, and Confluence for version control, sprint tracking, collaboration, and audit-trail documentation.",
    ],

    skills: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React Hook Form",
      "Yup",
      "JavaScript",
      "REST APIs",
      "Git",
      "Jira",
      "Confluence",
      "Performance Optimization",
      "MERN Stack",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: nifftlogo,
    school: "National Institute of Foundry and Forge Technology (NIFFT), Ranchi",
    date: "July 2016 - Oct 2020",
    grade: "8.2 CGPA",
    desc: "I completed my Bachelor of Technology from the National Institute of Foundry and Forge Technology (NIFFT), Ranchi, where I developed a strong engineering foundation and a structured approach toward problem-solving. My academic journey helped me strengthen my analytical thinking, logical reasoning, and ability to understand and solve complex technical challenges. During my time at NIFFT, I gained valuable experience through academic projects, collaborative learning, and hands-on problem-solving activities that enhanced my ability to work with concepts, analyze real-world problems, and develop practical solutions. The engineering environment encouraged curiosity, innovation, and continuous improvement while helping me build discipline, adaptability, and a strong learning mindset. Beyond academics, my college experience played an important role in shaping my interest in technology and software development. It taught me the importance of consistency, teamwork, research, and staying updated with evolving technologies. The skills, mindset, and experiences gained during this phase became the foundation for my journey toward building technology-driven solutions and creating meaningful digital experiences.",
    degree: "Bachelor of Technology (B.Tech)",
  }, 
  {
    id: 1,
    img: MGSlogo,
    school: "M.G.S. High School, Jhajha",
    date: "May 2014 - April 2016",
    grade: "72%",
    desc: "I completed my higher secondary education in Science (PCM) from M.G.S. High School, Jhajha under BSEB. During this time, I gained a strong foundation in physics, chemistry, and mathematics, which improved my logical reasoning and problem-solving skills. This phase played a crucial role in strengthening my analytical mindset and academic discipline.",
    degree: "Higher Secondary Education (XII - Science, PCM)",
  },
  {
    id: 2,
    img: StJosephlogo,
    school: "St. Joseph's School, Jhajha",
    date: "Apr 2013 - March 2014",
    grade: "82%",
    desc: "I completed my secondary education from St. Joseph's School, Jhajha under the ICSE board. My academic journey here helped me build a strong base in core subjects along with communication and critical thinking skills. The disciplined learning environment contributed significantly to my overall academic development.",
    degree: "Secondary Education (X - ICSE)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Krish Bazaar - Shopping App",
    description:
    "A scalable shopping cart system built with a modular component architecture, enabling efficient state management and seamless user interactions. Leveraged AI-assisted tools for debugging and performance optimization, ensuring a faster, more reliable, and maintainable user experience.",
    image: krishbazaarimg,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
    github: "https://github.com/sbarnwal06/megamart",
    webapp: "https://krishbazaar.netlify.app/",
  },
  {
    id: 1,
    title: "AntarNaad - Mantra Counter App",
    description:
      "A scalable shopping cart system built with a modular component architecture, enabling efficient state management and seamless user interactions. Leveraged AI-assisted tools for debugging and performance optimization, ensuring a faster, more reliable, and maintainable user experience.",
    image: antarnaadimg,
    tags: ["React JS", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/sbarnwal06/mantra-counter",
    webapp: "https://antarnaad.netlify.app/",
  },
  {
    id: 2,
    title: "CareerFit Copilot App",
    description:
      "An AI-powered interview preparation platform that analyzes target job descriptions against candidate profiles to generate tailored technical & behavioral questions, personalized multi-day preparation roadmaps, gap analysis, and tailored resume exports.",
    image: careerfitcopilot,
    tags: ["React JS", "Tailwind CSS","HTML", "CSS", "JavaScript", "MongoDB", "Node JS", "Express JS"],
    github: "https://github.com/sbarnwal06/CareerFit-Copilot",
    webapp: "https://career-fit-copilot.vercel.app/",
  },
];
