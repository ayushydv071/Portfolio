export const personalInfo = {
  name: "Ayush Yadav",
  title: "Data Science Student & Full-Stack Developer",
  role: "Full-Stack Developer",
  githubUsername: "ayushydv071",
  email: "ayushydv071@gmail.com",
  phone: "+91 98765 43210", // Placeholder, editable by Ayush
  location: "India",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/ayushydv071",
    linkedin: "https://www.linkedin.com/in/ayush-yadav-021668349",
    email: "mailto:ayushydv071@gmail.com",
  },
  heroWords: [
    "Data Science",
    "Full Stack",
    "MERN & API"
  ],
  heroBio: "3rd-year B.Tech Data Science student crafting production-grade MERN stack applications, smart API integrations, and exploring AI/ML.",
  aboutBio: [
    "Hi there! I'm Ayush Yadav, a 3rd-year B.Tech Data Science student driven by building clean, production-grade applications that solve real-world problems.",
    "My expertise spans modern web development with the MERN stack, competitive problem solving in C++ (100+ DSA problems solved), and foundational Machine Learning models. I focus on clean, maintainable code, shipping real products, and learning in public.",
    "Currently expanding my horizons into Machine Learning algorithms and fine-tuning Large Language Models (LLMs) while taking on client projects and open-source contributions."
  ],
  stats: [
    { label: "DSA Problems", value: "100+" },
    { label: "Projects Delivered", value: "10+" },
    { label: "Current Focus", value: "Full Stack & AI" },
    { label: "Degree Level", value: "B.Tech Data Science (3rd Yr)" }
  ]
};

export const aboutCards = [
  {
    id: 1,
    title: "DSA & Problem Solving",
    subtitle: "C++ & Algorithms",
    description: "Strong foundation in data structures, algorithms, and logical problem solving with 100+ competitive programming challenges solved.",
    icon: "Code2",
    color: "cyan"
  },
  {
    id: 2,
    title: "Full-Stack Development",
    subtitle: "MERN Stack Specialist",
    description: "Building responsive, modern React frontends coupled with scalable Node.js/Express REST APIs and MongoDB databases.",
    icon: "Layers",
    color: "purple"
  },
  {
    id: 3,
    title: "Machine Learning",
    subtitle: "Data Science & NLP",
    description: "Developing intelligent classification models, TF-IDF predictors, and analyzing datasets with Python & ML frameworks.",
    icon: "BrainCircuit",
    color: "emerald"
  },
  {
    id: 4,
    title: "Workflow Automation",
    subtitle: "n8n & Webhooks",
    description: "Designing automated backend pipelines, webhooks integration, and cloud media handling for friction-free operations.",
    icon: "Zap",
    color: "gold"
  }
];

export const skillsCategories = [
  {
    category: "MERN & Web Stack",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom", color: "#61DAFB" },
      { name: "Node.js", level: "Advanced", icon: "Server", color: "#339933" },
      { name: "Express.js", level: "Advanced", icon: "Cpu", color: "#FFFFFF" },
      { name: "MongoDB", level: "Intermediate", icon: "Database", color: "#47A248" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode", color: "#F7DF1E" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette", color: "#06B6D4" }
    ]
  },
  {
    category: "Programming & Data Science",
    skills: [
      { name: "C++", level: "Advanced (DSA)", icon: "Code", color: "#00599C" },
      { name: "Python", level: "Intermediate", icon: "Terminal", color: "#3776AB" },
      { name: "Machine Learning", level: "Intermediate", icon: "Brain", color: "#FF6F61" },
      { name: "REST APIs", level: "Advanced", icon: "Globe", color: "#8B5CF6" }
    ]
  },
  {
    category: "Tools & Automation",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch", color: "#F05032" },
      { name: "n8n Automation", level: "Intermediate", icon: "Workflow", color: "#FF6584" },
      { name: "Cloudinary / APIs", level: "Intermediate", icon: "Cloud", color: "#3448C5" },
      { name: "Vercel / Deployment", level: "Advanced", icon: "UploadCloud", color: "#FFFFFF" }
    ]
  }
];

export const projectsData = {
  personal: [
    {
      id: "fake-news-predictor",
      title: "Fake News Predictor",
      category: "Machine Learning / NLP",
      description: "Hybrid AI & ML pipeline detecting misinformation with 86.7% accuracy and 100% fake news precision. Uses spaCy claim extraction, BART stance detection, Sentence-Transformers semantic matching, and Gemini 3.6 Flash reasoning.",
      techStack: ["FastAPI", "Python", "HuggingFace", "spaCy", "Streamlit", "Gemini AI"],
      repoName: "mini-project",
      githubUrl: "https://github.com/ayushydv071/mini-project",
      liveUrl: "",
      featured: true,
      fallbackStars: 3,
      fallbackForks: 1,
      features: [
        "86.7% Accuracy & 100% Fake Precision",
        "spaCy Claim Extraction & Search",
        "BART-Large-MNLI Stance Classification",
        "Gemini 3.6 Flash Verdict Explanations"
      ]
    },
    {
      id: "chop-ai",
      title: "ChopAI",
      category: "AI & Workflow Automation",
      description: "Full-stack AI background removal platform powered by n8n workflows, Supabase Realtime live job updates, Cloudinary media processing, and Razorpay credit top-ups.",
      techStack: ["React 19", "TypeScript", "Supabase", "n8n", "Razorpay", "Tailwind CSS"],
      repoName: "chop-magic-ai",
      githubUrl: "https://github.com/ayushydv071/chop-magic-ai",
      liveUrl: "",
      featured: true,
      fallbackStars: 5,
      fallbackForks: 2,
      features: [
        "Instant AI background removal pipeline",
        "n8n + Cloudinary automated workflow",
        "Supabase Realtime live job status",
        "Razorpay payment & credit top-up system"
      ]
    },
    {
      id: "forum-discussion-board",
      title: "Online Forum & Discussion Board",
      category: "Frontend & Web Application",
      description: "A responsive online discussion board built with HTML5, CSS3 & Vanilla JavaScript. Features local storage data persistence, simulated user authentication, topic creation, commenting, search, likes, and admin moderation.",
      techStack: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      repoName: "project-html5-css-js",
      githubUrl: "https://github.com/ayushydv071/project-html5-css-js",
      liveUrl: "",
      featured: true,
      fallbackStars: 4,
      fallbackForks: 2,
      features: [
        "Topic feed & live search filter",
        "Topic detail view with comments",
        "Simulated login & register auth",
        "Admin moderation (delete topics/comments)",
        "Dark / Light mode theme toggle",
        "100% LocalStorage browser persistence"
      ]
    }
  ],
  client: [
    {
      id: "rasmalai",
      title: "Rasmalai",
      category: "Client Freelance Project",
      description: "A custom 8-page interactive web application crafted for a client as a personalized proposal gift, featuring custom page animations, interactive flows, and media galleries.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      repoName: "Rasmalai",
      githubUrl: "https://github.com/ayushydv071/Rasmalai",
      liveUrl: "",
      featured: true,
      isClientProject: true,
      clientTag: "Freelance Work",
      features: [
        "Custom 8-page interactive web design",
        "Personalized romantic proposal flows",
        "Responsive Vanilla JS & CSS animations"
      ]
    },
    {
      id: "birthday-gift",
      title: "BirthdayGift",
      category: "Client Freelance Project",
      description: "Interactive, highly personalized gift platform with dynamic animations, custom wish generation, and media gallery for special occasions.",
      techStack: ["React", "Framer Motion", "Tailwind CSS"],
      repoName: "BirthdayGift",
      githubUrl: "https://github.com/ayushydv071/BirthdayGift",
      liveUrl: "",
      featured: true,
      isClientProject: true,
      clientTag: "Client Project",
      features: [
        "Personalized gift experience",
        "Custom wish generator & media gallery",
        "Fluid Framer Motion animations"
      ]
    }
  ]
};
