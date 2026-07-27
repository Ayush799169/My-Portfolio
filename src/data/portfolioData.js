import white from "../assets/white.jpeg";
import visitorPass from "../assets/VisitorPass.png";
import RealTimeQuiz from "../assets/RealTimeQuiz.png";
import Portfolio02 from "../assets/Portfolio02.png";
import Participate from "../assets/Participate.png";
import Aitracker from "../assets/Ai-tracker.png";
import movie from "../assets/movie.png";
import tolist from "../assets/to-list.png";


export const PROFILE = {
  name: "Ayush Kumar Yadav",
  role: "Software Engineer | Frontend Developer",

  location: " Varanasi Uttar Pradesh,India",
  expertise:
    "Frontend Development | React.js | Software Engineering (Intermediate)",
    resumeFile : "/Ayush_K_y_Resume.pdf",

  tags: [
    "Software Engineer (Frontend)",
    "React Developer",
    "MERN Stack",
    "Problem Solver",
    "C++",
    "JavaScript",
    "Fast Learner",
  ],

  email: "ay4708504@gmail.com",
  phone: "+91 7991693805",
  photo: white,

  socials: {
    github: "https://github.com/Ayush799169",
    linkedin: "https://linkedin.com/in/your-linkedin-handle",
    instagram: "https://instagram.com/ayush_yaduvanshi06",
    whatsapp: "https://wa.me/917991693805",
  },
};

export const ABOUT = {
  intro:
    "I am Ayush Kumar Yadav, a passionate Software Engineer (Frontend) and React Developer from Varanasi, Uttar Pradesh, India. I enjoy building responsive, user-friendly, and modern web applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS. I have developed multiple projects to strengthen my frontend development skills and am continuously improving my problem-solving abilities with C++ and Data Structures & Algorithms. I am currently looking for Software Engineer and Frontend Developer opportunities where I can learn, grow, and contribute to real-world products.",
  paragraphs: [
    "I care about projects working end to end: deployed, connected, and usable — not just running on localhost.",
    "Currently sharpening my skills in system design and clean API architecture, and looking for opportunities where I can contribute to real products.",
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA) | (CGPA : 7.5)",
      institute: "Mahatma Gandhi Kashi Vidyapith   (Varanasi)",
      year: "2023 - 2026",
      location: "Varanasi, Uttar Pradesh, India",
      email: "ay470850@gmail.com",
      Phone: "7991693805",
      learning:
        "Software Engineering, Web Development, Data Structures & Algorithms, Database Management, and Problem Solving.",
    },
  ],
};

export const SKILLS = {
  "Programming Languages": ["C", "JavaScript", "C++",],

  "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],

  "Backend": ["Node.js", "Express.js", "MongoDB", "REST APIs"],

  "Databases & Tools": [ "MongoDB", "Mongoose", "Git", "GitHub", "VS Code", "Postman","Netlify","Render",],

  "Soft Skills": ["Teamwork","Problem Solving","Communication","Time Management","Quick Learning",],
};


export const ALL_SKILL_ICONS = [
  "JavaScript",
  "HTML",
  "CSS",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Postman",
  "C++",
  "Data Structures & Algorithms",
  "C",
  "Netlify",
  "python"
];

export const PROJECTS = [
  {
    id: "01",
    title: "Visitor Pass Management System",
    description:
      "Full-stack visitor management platform with role-based auth, QR-code passes, appointment booking, and live check-in/check-out tracking.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "QRCode",
      "Axios",
      "Tailwind CSS",
      "React Router DOM",
    ],
    live: "https://visitor-passing-managment-3a0df3.netlify.app",
    github: "https://ayush799169.github.io/visitor-pass-system/",
    image: visitorPass,
    status: "deployed",
    note:"Hosted on the free tier. Please allow 3-5 seconds for the backend to start on the first load.",
  },

  {
    id: "02",
    title: "Real-Time Quiz App",
    description:
      " Real-Time Quiz App A simple, interactive quiz application built with HTML, CSS, and JavaScript. Test your knowledge with timed questions, track your score in real-time, and try to beat your high score!",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://real-time-quiz-app.netlify.app",
    github: "https://ayush799169.github.io/Real-Time-Quiz-App/",
    image: RealTimeQuiz, 
    status: "deployed",
  },

  {
    id: "03",
    title: "AI-Powered Expense-Tracker-Analysis",
    description:
      "A smart expense tracker that helps users manage income and expenses, visualize spending with charts, and generate intelligent financial insights using a rule-based analysis engine.",
       tech: [
      "Javascript",
      "React.js",
      "Tailwind CSS",
      "Chart.js",
      "React Router DOM",
      "LocalStorage",
    ],
    live: "https://aiexpensetracker26.netlify.app/", 
    github: "https://ayush799169.github.io/AI-Expense-Tracker/",
    image:Aitracker,
    status: "deployed",
  },

  {
    id: "04",
    title: "Movies | OTT Platform",
    description:
      "A responsive movie browsing application that fetches real-time movie data using APIs, allowing users to search, explore, and view movie details with a modern user interface.",
    tech: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "OMDbAPI",
      "React Router DOM",
    ],
    live: "https://movieplatform-941e87.netlify.app/", 
    github: "https://ayush799169.github.io/movie-Platform/",
    image: movie,
    status: "deployed",
  },

  {
    id: "05",
    title: "To-Do-List",
    description:
      "A simple and responsive task management application that allows users to add, edit, delete,Update, and organize daily tasks with persistent local storage.",
    tech: ["React.js", "JavaScript", "css", "localStorges","MongoDb","Node.js",],
    live: "https://todo-listing-8fac87.netlify.app/", 
    github: "https://ayush799169.github.io/to--do-list/",
    image:tolist ,
    status: "deployed",
  },
];

export const CERTIFICATES = [
  {
    title: "MERN Stack Development",
    issuer: "Tutedude",
    year: "May 2026",
    category: "tech",
    link: "https://upskill.tutedude.com/certificate/TD-AYUS-ME-0920",
  },
];

export const GALLERY_ITEMS = [
  {
    image: Portfolio02,
    caption: "My Portfolio Website",
    category: "personal",
  },
  {
    image: visitorPass,
    caption: "Visitor Pass Management System",
    category: "projects",
  },
  {
    image: RealTimeQuiz,
    caption: "Real-Time Quiz Application",
    category: "projects",
  },
  {
    image: Participate,
    caption: "Internship Common Aptitude Test (ICAT) - 2025",
    category: "achievements",
  },
];

export const BLOG_POSTS = [
  {
    title: "Building My First React Portfolio",
    excerpt:
      "I built my personal portfolio using React.js and Tailwind CSS. During this project I learned component-based architecture, reusable UI, responsive design, and deployment.",
    date: "July 2026",
    likes: 0,
    dislikes: 0,
  },

  {
    title: "What I Learned From Building a Visitor Pass Management System",
    excerpt:
      "This MERN Stack project helped me understand authentication, protected routes, REST APIs, MongoDB integration, and real-world CRUD operations.",
    date: "July 2026",
    likes: 0,
    dislikes: 0,
  },

  {
    title: "Why I Love Frontend Development",
    excerpt:
      "Frontend development allows me to transform ideas into interactive and responsive user interfaces. I enjoy working with React.js, Tailwind CSS, and modern JavaScript.",
    date: "2026",
    likes: 0,
    dislikes: 0,
  },

  {
    title: "My Journey Towards Becoming a Software Engineer",
    excerpt:
      "As a BCA student, I am continuously improving my skills in React.js, JavaScript, C++, DSA, and the MERN Stack while building practical projects and preparing for software engineering roles.",
    date: "2026",
    likes: 0,
    dislikes: 0,
  },
];



export const Contact = {
  name: "Ayush Kumar Yadav",

  email: "ay4708504@gmail.com",

  phone: "7991693805",

  location: "Varanasi, Uttar Pradesh, India",

  socials: {
    github: "https://github.com/Ayush799169",

    linkedin: "https://linkedin.com/in/your-linkedin-handle",

    instagram: "https://instagram.com/ayush_yaduvanshi06",

    whatsapp: "https://wa.me/917991693805",
  },
};
