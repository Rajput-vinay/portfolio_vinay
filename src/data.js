export const NAV_ITEMS = ['about', 'qualification', 'skills', 'projects', 'experience', 'activities', 'certifications', 'contact'];

export const PROJECT_CATEGORIES = [
  {
    key: 'frontend',
    label: 'Frontend Projects',
    code: '01 / FRONTEND',
    projects: [
      { num: '01', name: 'Weather App', live: true, liveLink: 'https://weather-app-wine-theta.vercel.app/', githubLink: 'https://github.com/Rajput-vinay/WeatherApp', tagline: 'Real-Time Weather Application', highlights: ['Built a responsive weather application with a clean UI and real-time weather data.', 'Designed for fast interaction and responsive layouts across devices.'], stack: ['HTML','CSS','JavaScript','Weather API'], deploy: 'Vercel' },
      { num: '02', name: 'Password Generator', live: true, liveLink: 'https://password-generator-app-rho-pink.vercel.app/', githubLink: 'https://github.com/Rajput-vinay/PasswordGeneratorApp', tagline: 'Secure Password Generator', highlights: ['Created a lightweight password generator with configurable password creation.', 'Focused on a simple, responsive and user-friendly interface.'], stack: ['React.js','JavaScript','CSS'], deploy: 'Vercel' },
      { num: '03', name: 'YouTube Lite', live: true, liveLink: 'https://youtube-lite-three.vercel.app/', githubLink: 'https://github.com/Rajput-vinay/youtube_lite', tagline: 'YouTube-Inspired Video Interface', highlights: ['Built a YouTube-inspired frontend with video browsing and interactive UI sections.', 'Implemented responsive layouts with modern React patterns.'], stack: ['React.js','Tailwind CSS','Redux'], deploy: 'Vercel' },
      { num: '04', name: 'Tic Tac Toe', live: true, liveLink: 'https://tic-tae-toe-woad.vercel.app/', githubLink: 'https://github.com/Rajput-vinay', tagline: 'Interactive Browser Game', highlights: ['Built an interactive Tic Tac Toe game with game-state handling and a responsive interface.', 'Focused on reusable UI logic and smooth player interaction.'], stack: ['HTML','CSS','JavaScript'], deploy: 'Vercel' },
      { num: '05', name: 'Thunder Landing Page', live: true, liveLink: 'https://thunder-landing-page-ecru.vercel.app/', githubLink: 'https://github.com/Rajput-vinay', tagline: 'Modern Product Landing Page', highlights: ['Designed a modern landing page for the Thunder product experience.', 'Focused on polished sections, responsive presentation and conversion-oriented UI.'], stack: ['React.js','Tailwind CSS'], deploy: 'Vercel' },
    ],
  },
  {
    key: 'backend',
    label: 'Backend Projects',
    code: '02 / BACKEND',
    projects: [
      { num: '01', name: 'Todo App API', live: false, liveLink: null, githubLink: 'https://github.com/Rajput-vinay/backend-app-todo-app.git', tagline: 'RESTful Todo Backend', highlights: ['Built backend APIs for todo management and CRUD workflows.', 'Structured the project around server-side routing, controllers and persistent data handling.'], stack: ['Node.js','Express.js','MongoDB'], deploy: 'GitHub' },
      { num: '02', name: 'Blog App API', live: false, liveLink: null, githubLink: 'https://github.com/Rajput-vinay/backend-blogging-app.git', tagline: 'Blogging Backend Service', highlights: ['Built backend services for creating, updating and managing blog content.', 'Implemented API-oriented server architecture for application integration.'], stack: ['Node.js','Express.js','MongoDB'], deploy: 'GitHub' },
      { num: '03', name: 'Authentication Service', live: false, liveLink: null, githubLink: 'https://github.com/Rajput-vinay/Authentication_Service.git', tagline: 'Authentication Backend', highlights: ['Built a dedicated authentication service for secure user access workflows.', 'Organized reusable backend logic for authentication and authorization flows.'], stack: ['Node.js','Express.js','MongoDB','JWT'], deploy: 'GitHub' },
      { num: '04', name: 'Ecommerce Backend', live: false, liveLink: null, githubLink: 'https://github.com/Rajput-vinay/Ecommerce_backend.git', tagline: 'E-Commerce Backend API', highlights: ['Created backend foundations for an e-commerce application and its API workflows.', 'Structured server-side logic for scalable application development.'], stack: ['Node.js','Express.js','MongoDB'], deploy: 'GitHub' },
    ],
  },
  {
    key: 'fullstack',
    label: 'Full Stack Projects',
    code: '03 / FULL STACK',
    projects: [
      { num: '01', name: 'CampusSync', live: true, liveLink: 'https://campus-sync-phi.vercel.app/', githubLink: 'https://github.com/Rajput-vinay/campus_sync', tagline: 'MERN LMS & Institute Management Portal', highlights: ['Designed a scalable MERN-based Learning Management System and Institute Management Portal for NSTI, Kanpur.', 'Built multi-tenant architecture with RBAC, AI-driven timetable and exam generation, attendance tracking and hostel management.', 'Integrated Google Gemini AI, Inngest, Nodemailer and PositionStack API for automation and smart workflows.'], stack: ['React.js','Node.js','Express.js','MongoDB','Tailwind CSS','Google Gemini AI','Inngest','Nodemailer','PositionStack API'], deploy: 'Vercel' },
      { num: '02', name: 'Vidya-Sankalp', live: true, liveLink: 'https://vidya-sankalp.vercel.app/', githubLink: 'https://github.com/Rajput-vinay/Vidya-Sankalp', tagline: 'Ed-Tech Learning Platform', highlights: ['Built a full-stack ed-tech platform using the MERN stack for an interactive learning experience.', 'Created responsive UI with React.js and Tailwind CSS with a focus on accessibility and seamless UX.'], stack: ['React.js','Node.js','Express.js','MongoDB','Tailwind CSS'], deploy: 'Vercel' },
      { num: '03', name: 'Thunder.ai', live: true, liveLink: 'https://thunder-ai-sigma.vercel.app/', githubLink: 'https://github.com/Rajput-vinay/thunder.ai', tagline: 'AI-Powered Website Generator', highlights: ['Integrated Gemini AI for intelligent code generation and React.js website creation.', 'Built AI-driven workflows to create, modify and export functional projects with a real-time preview.'], stack: ['React.js','Tailwind CSS','Express.js','Node.js','ConvexDB','Gemini AI'], deploy: 'Vercel' },
      { num: '04', name: 'AI Calling Agent', live: true, liveLink: 'https://ai-calling-agent-umber.vercel.app/login', githubLink: 'https://github.com/Rajput-vinay', tagline: 'AI-Powered Calling Application', highlights: ['Developed a full-stack AI Calling Agent with a dedicated login experience and application workflow.', 'Worked on frontend integration and backend connectivity for an AI-powered calling solution.'], stack: ['Next.js','React.js','Node.js','Express.js'], deploy: 'Vercel' },
      { num: '05', name: 'Job Portal', live: true, liveLink: 'https://job-portal-zeta-ten.vercel.app/', githubLink: 'https://github.com/Rajput-vinay', tagline: 'Full-Stack Job Platform', highlights: ['Built a full-stack job portal experience connecting frontend workflows with backend services.', 'Focused on responsive UI and practical recruitment-oriented user flows.'], stack: ['React.js','Node.js','Express.js','MongoDB'], deploy: 'Vercel' },
      { num: '06', name: 'Second Brain', live: true, liveLink: 'https://second-brain-frontend-opal.vercel.app/', githubLink: 'https://github.com/Rajput-vinay', tagline: 'Personal Knowledge Management App', highlights: ['Built a full-stack knowledge-management interface for organizing personal information and resources.', 'Designed a modern responsive frontend with connected application workflows.'], stack: ['React.js','Node.js','Express.js','MongoDB'], deploy: 'Vercel' },
    ],
  },
];

export const PROJECTS = PROJECT_CATEGORIES.flatMap(category => category.projects);

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer Trainee',
    company: 'Quantum IT Innovation',
    type: 'INTERNSHIP',
    period: 'Mar 2025 – Jun 2025',
    bullets: [
      'Developed and deployed a full-stack AI Calling Agent integrating an internal AI API using Next.js and Node.js.',
      'Fixed critical bugs and improved website performance, resulting in a 15% reduction in page load time.',
      'Enhanced blog loading speed and optimized SEO structure, leading to a 20% increase in organic traffic.',
      'Created a modern responsive frontend for the CareLinx project using React components.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
  },
  {
    role: 'Software Development Engineer Intern',
    company: 'Interpixel (Remote)',
    type: 'INTERNSHIP',
    period: 'Feb 2024 – Mar 2024',
    bullets: [
      'Developed a front-end prototype for an EdTech doubt-solving platform using React.js.',
      'Enhanced project functionality and codebase through collaboration with senior developers.',
      'Managed development tasks for a team of interns, ensuring smooth project execution.',
    ],
    stack: ['React.js', 'Problem Solving'],
  },
];

export const QUALIFICATIONS = [
  { year: '2019',    degree: 'Class X — Secondary',                  school: 'Agra Public School, Agra',               pct: '80.6%' },
  { year: '2021',    degree: 'Class XII — Senior Secondary',         school: 'Agra Public School, Agra',               pct: '82.4%' },
  { year: '2025',    degree: 'B.Tech — Computer Science Engineering', school: 'Dr. Ram Manohar Lohia Avadh University', pct: '79.8%' },
  { year: 'Ongoing', degree: 'CITS — Computer Software Application', school: 'National Skill Training Institute', pct: '94.6%' },
];

export const SKILLS = [
  { cat: 'Frontend',       tags: ['HTML', 'CSS', 'Tailwind CSS', 'ShadCN', 'JavaScript', 'TypeScript', 'React.js'] },
  { cat: 'Backend',        tags: ['Node.js', 'Next.js', 'WebSocket'] },
  { cat: 'Tools & DevOps', tags: ['VS Code', 'Docker', 'Git', 'GitHub', 'Prisma'] },
  { cat: 'Database',       tags: ['MongoDB', 'MySQL', 'PostgreSQL'] },
];

export const ACTIVITIES = [
  {
    icon: 'CO',
    role: 'Co-Founder',
    org: 'Amey Society',
    desc: 'Co-founded a society focused on community building, collaboration, and nurturing talent among peers.',
  },
  {
    icon: 'CP',
    role: 'CCP Lead',
    org: 'Algozenith',
    desc: 'Led the Competitive Programming community — organizing contests, mentoring members, and fostering algorithmic thinking.',
  },
];

export const CERTIFICATIONS = [
  { name: 'Object-Oriented Programming', issuer: 'takeUforward' },
  { name: 'Web Development Cohort 3', issuer: '100xDevs' },
  { name: 'NASSCOM Python Excellence Certificate', issuer: 'Coding Ninjas' },
  { name: 'DSA Supreme Batch', issuer: 'CodeHelp' },
];

export const CONTACT_INFO = [
  { icon: '✆', label: 'Phone',    val: '+91 99279 03610',              href: 'tel:+919927903610' },
  { icon: '✉', label: 'Email',    val: 'vinaryrajput2004vr@gmail.com', href: 'mailto:vinaryrajput2004vr@gmail.com' },
  { icon: '◈', label: 'Location', val: 'Agra, Uttar Pradesh, India',   href: null },
  { icon: 'in', label: 'LinkedIn', val: 'vinay-rajput-984668227',      href: 'https://linkedin.com/in/vinay-rajput-984668227' },
  { icon: 'gh', label: 'GitHub',  val: 'Rajput-vinay',                 href: 'https://github.com/Rajput-vinay' },
];
