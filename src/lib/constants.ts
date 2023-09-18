import React from "react";
import ecommerce from "../assets/images/ecommerce.png";
import joegym from "../assets/images/joegym.jpg";
import pasada from "../assets/images/pasada.jpg";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const Links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const;

export const projectsData = [
  {
    title: "Ecommerce Website",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: ecommerce,
    href: "",
  },
  {
    title: "Fitness Website",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: joegym,
    href: "",
  },
  {
    title: "Mobile Application ",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: pasada,
    href: "https://www.youtube.com/watch?v=AN7ht86bj2I&ab_channel=PASADAPH",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Graduated ",
    location: "Philippines",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eaque sint necessitatibus, cum quas architecto obcaecati voluptatibus tempore possimus sunt.",

    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Philippines",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eaque sint necessitatibus, cum quas architecto obcaecati voluptatibus tempore possimus sunt.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Philippines",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eaque sint necessitatibus, cum quas architecto obcaecati voluptatibus tempore possimus sunt.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;
