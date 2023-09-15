import SectionHeading from "../components/SectionHeading";
import useSectionInView from "../hooks/useSectionInView";
import { skillsData } from "../lib/constants";
import { motion } from "framer-motion";

type Props = {};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  const skillVariant = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index },
    }),
  };

  return (
    <section ref={ref} id="skills" className="scroll-mt-36 sm:scroll-mt-32">
      <div className="mx-auto max-w-[700px] px-5 ">
        <SectionHeading>Skills</SectionHeading>
        <ul className="flex flex-wrap items-center justify-center gap-7">
          {skillsData.map((skill, index) => (
            <motion.li
              variants={skillVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={`${skill + index}`}
              className="rounded-md border border-black/10  bg-gray-100/30 px-3 py-2 font-medium shadow-md dark:bg-blue-100/10 dark:shadow-black/70"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
