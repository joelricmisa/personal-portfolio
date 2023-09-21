import myPic from "../assets/images/me.png";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import useSectionInView from "../hooks/useSectionInView";

const Intro = () => {
  const minWidth = useMediaQuery("(min-width:640px)");
  const { ref } = useSectionInView("Home");

  return (
    <section ref={ref} id="home">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: [0, 25, 0], opacity: 1 }}
        className="relative  pt-40"
      >
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-6  px-10 md:w-[700px] ">
          <div className="relative h-24 w-24">
            <img
              src={myPic}
              alt="profile picture"
              className="rounded-full border-[4px] border-white object-cover shadow-xl  dark:border-slate-900/50 dark:shadow-white/30  "
            />

            <span className="absolute bottom-1 right-0 text-3xl">👋</span>
          </div>
          <h1 className="text-center text-xl font-medium leading-loose  dark:text-white/90 sm:text-2xl sm:leading-loose">
            <strong>Hello, I'm Joel Ric Misa,</strong> a passionate
            <strong> front-end developer</strong> from the Philippines. I enjoy
            developing
            <em> websites and applications</em>.
          </h1>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: [-50, 0], opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex flex-col gap-4  pb-10 sm:flex-row"
          >
            <a
              href="#contact"
              className="introButton bg-gray-900 text-white dark:bg-gray-900 dark:text-white/90"
            >
              Contact me here <BsArrowRight />
            </a>
            <button type="button" className="introButton">
              Download CV <HiDownload />
            </button>
            <a
              href="https://www.linkedin.com/in/joelricmisa/"
              target="_blank"
              className="introButton"
            >
              {minWidth ? "" : "LinkedIn"} <BsLinkedin />
            </a>
            <a
              href="https://github.com/joelricmisa"
              target="_blank"
              className="introButton"
            >
              {minWidth ? "" : "Github"}
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
