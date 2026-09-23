export const NAV_ITEMS = ['about', 'qualification', 'skills', 'projects', 'experience', 'activities', 'certifications', 'contact'];

export const PROJECTS = [
  {
    num: '01',
    name: 'CampusSync',
    live: true,
    liveLink: 'https://campus-sync-phi.vercel.app/',
    githubLink: 'https://github.com/Rajput-vinay/campus_sync',
    tagline: 'MERN LMS & Institute Management Portal',
    highlights: [
      'Designed a scalable MERN-based Learning Management System (LMS) and Institute Management Portal for National Skill Training Institute (NSTI), Kanpur.',
      'Built a multi-tenant architecture with Super Admin capabilities, Role-Based Access Control (RBAC), AI-driven timetable and exam generation, attendance tracking, and hostel management.',
      'Streamlined workflows with automated email notifications and distance-based hostel allocation using Google Gemini AI, Inngest, Nodemailer, and PositionStack API.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Google Gemini AI', 'Inngest', 'Nodemailer', 'PositionStack API'],
    deploy: 'Vercel',
  },
  {
    num: '02',
    name: 'Vidya-Sankalp',
    live: true,
    liveLink:"https://vidya-sankalp.vercel.app/",
    githubLink: 'https://github.com/Rajput-vinay',
    tagline: 'Ed-Tech Learning Platform',
    highlights: [
      'Built a fully functional ed-tech platform using the MERN stack ensuring a robust and interactive learning experience.',
      'Designed an intuitive interface with React.js and Tailwind CSS, increasing student interaction by 30–40%.',
      'Emphasized accessibility and seamless UX across all device sizes.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    deploy: 'Vercel',
  },
  {
    num: '03',
    name: 'Thunder.ai',
    live: true,
    liveLink:"https://thunder-ai-sigma.vercel.app/",
    githubLink: 'https://github.com/Rajput-vinay',
    tagline: 'AI-Powered Website Generator',
    highlights: [
      'Integrated Gemini AI for intelligent code generation — generate full React.js websites in under 5 minutes.',
      'Leveraged AI-driven automation allowing users to create, modify, and export fully functional React.js projects effortlessly.',
      'Built a real-time preview and customization engine with live export support.',
    ],
    stack: ['React.js', 'Tailwind CSS', 'Express.js', 'Node.js', 'ConvexDB', 'Gemini AI'],
    deploy: 'Vercel',
  },
];

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
  { year: 'Ongoing', degree: 'CITS — Computer Software Application',  school: 'National Skill Training Institute',       pct: 'Pursuing' },
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
