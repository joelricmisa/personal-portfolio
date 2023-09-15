import { useRef } from "react";
import { projectsData } from "../lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const ProjectCard = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <section>
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="group relative mx-auto mb-16 flex w-full flex-col  overflow-hidden  rounded-xl border border-black/[0.1] shadow-lg dark:bg-blue-100/10  dark:shadow-black/70 sm:h-[350px] sm:flex-row"
      >
        <div className="flex basis-1/2 flex-col  items-center gap-10 p-8">
          <div className="flex flex-col  ">
            <h1 className="mb-3 text-2xl font-medium">{title}</h1>
            <p>{description}</p>
          </div>
          <ul className="flex w-full flex-wrap justify-start gap-4 ">
            {tags.map((item, index) => (
              <li
                key={index}
                className="rounded-lg border border-black/10 bg-gray-700 p-2 text-white shadow-md shadow-gray-300 dark:bg-blue-100/20 dark:shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <a href="#" className="hidden basis-1/2  sm:block">
          <img
            src={imageUrl}
            alt="Project Img"
            className="absolute -bottom-[20%] -right-[1%] h-full w-[300px]  self-end  rounded-md transition group-hover:-translate-x-3 group-hover:-translate-y-3  group-hover:-rotate-2
          group-hover:scale-105 "
          />
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectCard;
