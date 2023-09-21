import React from "react";
import ecommerce from "../assets/images/ecommerce.png";
import joegym from "../assets/images/joegym.jpg";
import pasada from "../assets/images/pasada.jpg";
import { CgWorkAlt } from "react-icons/cg";
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
      "An online marketplace enables customers to purchase and sell material goods, services, and digital products without physically visiting a store.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    imageUrl: ecommerce,
    href: "https://marketplace-ecommerce-joelricmisa.vercel.app/",
  },
  {
    title: "Fitness Website",
    description:
      "A landing page of fitness website that provides workout and nutrition programs.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: joegym,
    href: "https://fitness-web-app-joelric.vercel.app/#home",
  },
  {
    title: "Mobile Application ",
    description:
      "Mobile application that will act as an additional learning tool for PUV drivers and is funded by the DOST (Department of Science and Technology). ",
    tags: ["Ionic Framework", "Angular", "Typescript", "Tailwind CSS"],
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
  "Ionic",
  "Angular",
  "Tailwind CSS",
  "NPM",
  "API",
  "Node.js",
  "SQL",
  "MySQL",
  "Git",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Mobile Developer Intern",
    location:
      "Technological Institute of the Philippines, Quezon City / Department of Science and Technology",

    icon: React.createElement(CgWorkAlt),
    date: "January 2023 - May 2023",
  },
  {
    title: "Graduate of a Bachelor of Science in Information Technology",
    location: "Technological Institue of the Philippines, Quezon City",

    icon: React.createElement(LuGraduationCap),
    date: "September 2023",
  },
] as const;
