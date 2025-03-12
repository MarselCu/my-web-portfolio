import {
  NavLink,
  Social,
  CareerStat,
  Service,
  SectionData,
  AboutItem,
  ExperienceItem,
  EducationItem,
  SkillItem,
  Contact,
} from "./interfaces";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

export const navigationLinks: NavLink[] = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/services",
    label: "Services",
  },
  {
    link: "/resume",
    label: "Resume",
  },
  {
    link: "/work",
    label: "Work",
  },
  {
    link: "/contact",
    label: "Contact",
  },
];

export const socials: Social[] = [
  {
    icon: <FaGithub />,
    url: "https://github.com/MarselCu",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/marcheldev/",
  },
];

export const careerStats: CareerStat[] = [
  {
    num: 1,
    label: "Year of Experience",
  },
  {
    num: 3, 
    label: "Projects Contributed",
  },
  {
    num: 14, 
    label: "Technologies Explored",
  },
  {
    num: 65, 
    label: "Code Commits",
  },
];

export const offeredServices: Service[] = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Developing and maintaining responsive websites using modern web technologies while focusing on user experience and performance.",
    url: "/contact",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Building and managing backend applications with API integration, authentication, and database management using popular backend technologies.",
    url: "/contact",
  },
];

export const contactInfo: Contact[] = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 813 7369 9560",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "achell.chl@gmail.com",
  },
];

export const aboutMe: SectionData<AboutItem> = {
  title: "About Me",
  description: "",
  items: [
    {
      label: "Name",
      value: "Marchel",
    },
    {
      label: "Phone",
      value: "(+62) 813 7369 9560",
    },
    {
      label: "Exprerience",
      value: "1+ Years",
    },
    {
      label: "Email",
      value: "achell.chl@gmail.com",
    },
    {
      label: "Nationality",
      value: "Indonesian",
    },
    {
      label: "Language",
      value: "Bahasa (Native), English (Intermediate)",
    },
    {
      label: "Freelance",
      value: "Available",
    },
  ],
};

export const experiences: SectionData<ExperienceItem> = {
  title: "My Experience",
  description: "",
  items: [
    {
      company: "PT. Bank Central Asia (BCA)",
      position: "Frontend Developer Intern",
      duration: "2022 - 2023",
    },
  ],
};

export const educations: SectionData<EducationItem> = {
  title: "My Education",
  description: "",
  items: [
    {
      institution: "Udemy",
      program: "Master Backend Development: Node, Docker, and MongoDB 2025",
      duration: "2025",
    },
    {
      institution: "Udemy",
      program: "Master Next.js for Beginners with projects",
      duration: "2025",
    },
    {
      institution: "Udemy",
      program: "Git for Beginners",
      duration: "2025",
    },
    {
      institution: "Google Certified Digital Marketing Course",
      program: "The Fundamental of Digital Marketing",
      duration: "2022",
    },
    {
      institution: "Coursera",
      program: "Programming for Everybody (Getting Started with Python)",
      duration: "2020",
    },
    {
      institution: "President University",
      program: "Bachelor of Computer Science",
      duration: "2020 - 2023",
    },
  ],
};

export const skills: SectionData<SkillItem> = {
  title: "My Skills",
  description: "",
  items: [
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <SiAngular />,
      name: "Angular",
    },
    {
      icon: <SiReact />,
      name: "React",
    },
    {
      icon: <SiExpress />,
      name: "ExpressJs",
    },
    {
      icon: <SiNodedotjs />,
      name: "NodeJs",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiPhp />,
      name: "PHP",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiHtml5 />,
      name: "HTML5",
    },
    {
      icon: <SiFigma />,
      name: "Figma",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
  ],
};
