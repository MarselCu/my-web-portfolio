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
} from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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
    num: 0,
    label: "Projects Completed",
  },
  {
    num: 0,
    label: "Technologies Mastered",
  },
  {
    num: 0,
    label: "Code Commits",
  },
];

export const offeredServices: Service[] = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Creating responsive, high-performance, and visually appealing websites using modern web technologies and best coding practices.",
    url: "",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Building scalable and efficient server-side applications with robust API integrations, authentication, and database management.",
    url: "",
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
      institution: "Presindet University",
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
      icon: <SiHtml5 />,
      name: "HTML5",
    },
    {
      icon: <SiCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
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
      icon: <SiAngular />,
      name: "Angular",
    },
    {
      icon: <SiReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiExpress />,
      name: "ExpressJs",
    },
    {
      icon: <SiNodedotjs />,
      name: "NodeJs",
    },
  ],
};
