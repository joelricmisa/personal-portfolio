import { Links } from "../lib/constants";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "../context/ActiveSectionContext";

const Header = () => {
  const {
    activeSection,
    setActiveSection,
    setTimeOfLastClick,
    timeOfLastClick,
  } = useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[50px] w-full -translate-x-1/2 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6   sm:w-[650px] sm:rounded-full "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <nav className="fixed left-1/2 top-0 flex h-auto w-full -translate-x-1/2  flex-wrap bg-white sm:top-6  sm:w-[auto]  sm:bg-transparent">
        <ul className="flex h-auto w-full flex-wrap items-center  justify-center gap-4  py-2 sm:h-[50px] sm:flex-nowrap ">
          {Links.map((link, index) => (
            <motion.li
              key={`${link.name + index}`}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`${
                activeSection === link.name
                  ? "rounded-md bg-gray-200  text-gray-950 sm:rounded-full "
                  : ""
              } p-2 sm:p-1`}
            >
              <a
                href={link.href}
                className="flex w-full items-center justify-center px-0 transition  hover:text-gray-950 sm:px-3 "
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
