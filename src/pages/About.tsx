import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import useSectionInView from "../hooks/useSectionInView";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <section ref={ref} id="about" className="scroll-mt-32">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: [25, 0, 25, 0], opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-[700px] px-5 text-center text-gray-950 "
      >
        <SectionHeading>About Me</SectionHeading>
        <p className=" leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
          minima nemo porro aperiam aspernatur atque officia exercitationem
          iusto. Possimus nam numquam commodi quae incidunt obcaecati. Rem unde
          dicta laudantium similique excepturi voluptas, suscipit eos facilis
          aliquam culpa vero incidunt nostrum illo ut consequuntur a iste nisi
          placeat ad.
        </p>
        <p className="mt-5 leading-relaxed">
          Sunt, obcaecati! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Earum, ea cumque. Earum quo cupiditate velit quis explicabo
          natus iusto. Dolorem ut et, exercitationem numquam iste porro,
          cupiditate hic quos harum facere similique reprehenderit quas! Hic non
          animi laborum vitae soluta! Aliquam accusamus facilis consequatur hic
          quas debitis placeat neque ullam.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
