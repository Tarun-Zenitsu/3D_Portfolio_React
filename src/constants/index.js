import { school, college, degree, kopykitab, webdev } from "../assets/images";
import {
  blogLogo,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  zoomlog,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Schooling",
    company_name: "UGHS,Lingmarni",
    icon: school,
    iconBg: "#accbe1",
    date: "2004 - 2014",
    points: [
      "My education journey began in my village, Lingmarni.",
      "It is a small and beautiful village situated in Sonepur, Odisha.",
      "In this serene village, I successfully completed my matriculation.",
    ],
  },
  {
    title: "Intermediate",
    company_name: "Panchayat Juniour College,Bargarh",
    icon: college,
    iconBg: "#E6DEDD",
    date: "2014 - 2016",
    points: [
      "Successfully finished my intermediate education at the respected government institution, Panchayat College, Bargarh.",
      "Chose the science stream, specializing in Physics, Chemistry, Mathematics, and Biology, to gain a comprehensive understanding of scientific and mathematical concepts.",
    ],
  },
  {
    title: "Bachelor of Technology (Degree)",
    company_name: "Bhubaneswar College of Engineering",
    icon: degree,
    iconBg: "#383E56",
    date: "2017 - 2021",
    points: [
      "Successfully earned my Bachelor of Technology degree from Bhubaneswar College of Engineering.",
      "Pursued a specialization in Electronics and Communication Engineering during my studies.",
      "Despite my specialization, my passion for computer science led me to work on web development projects, combining my interests and skills to create meaningful web-based applications.",
    ],
  },
  {
    title: "Software Engineering intern",
    company_name: "Kopykitab",
    icon: kopykitab,
    iconBg: "#383E56",
    date: "Jun 2021 - August 2021",
    points: [
      "Joined Kopykitab as a software engineer intern, contributing to the design of their login page and integrating the backend with the frontend.",
      "Played a crucial role in creating a seamless user experience by enabling users to input data, processing it through the AI model, and displaying the best title and description for their articles.",
      " Collaborated with the team on the development of an AI model, which generates optimized titles and descriptions for users' articles, enhancing the overall usability and value of the platform.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: webdev,
    iconBg: "#383E56",
    date: " May 2022 - Present",
    points: [
      "Full stack Software Developer maintaining and building web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I have been contributing to open-source project. By collaborating with a community of developers, I actively participate in enhancing the project's features, fixing issues, and making valuable contributions to its growth and development.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Tarun-Zenitsu",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com",
  },
];

export const projects = [
  {
    iconUrl: blogLogo,
    theme: "btn-back-red",
    name: "Tarun's Blog",
    description:
      "This is a full-fledged MERN stack web app packed with cutting-edge features. It harnesses the power of React, MongoDB, Node.js, Express, and more to deliver an exceptional user experience.",
    link: "https://tarun-blog.onrender.com/",
  },
  {
    iconUrl: zoomlog,
    theme: "btn-back-blue",
    name: "Zoom Clone",
    description:
      "This project, built with Next.js and TypeScript, replicates Zoom, offering secure login, meeting creation, and features like recording, screen sharing, and participant management.",
    link: "https://zoom-clone-one-sigma.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Social Media App",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://social-media-app-hqby-tarun-zenitsu.vercel.app",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-green",
    name: "AI Articles Summarizer",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://aisummarizer-gpt.netlify.app",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-blue",
    name: "Movix",
    description:
      "Movix, a React-based movie database, integrates Redux and TMDB. Browse and discover films effortlessly, sorting by IMDb rating, genre, and more. Enjoy!",
    link: "https://movix-iota-jade.vercel.app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-pink",
    name: "Todo App",
    description:
      "This is a powerful Todo App built with React Next.js. Utilize Firebase as the backend for seamless user data storage and management.",
    link: "https://todo-delta-pied.vercel.app/login",
  },
];
