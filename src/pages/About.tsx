import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import useSectionInView from "../hooks/useSectionInView";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <section ref={ref} id="about" className="scroll-mt-36 sm:scroll-mt-32">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: [25, 0, 25, 0], opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-[700px] px-5 text-center sm:text-lg"
      >
        <SectionHeading>About Me</SectionHeading>
        <p className="leading-loose">
          With a strong foundation in HTML, CSS, JavaScript, React, and Tailwind
          CSS, I am a Junior Front-End Developer who excels at creating and
          maintaining user-friendly websites. My specialty is developing clean,
          optimized code using the most up-to-date development tools and
          methodologies, and creating dynamic, engaging interfaces. I also work
          well in cross-functional teams and like being a team player to create
          excellent web applications.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
