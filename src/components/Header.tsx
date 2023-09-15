import { Links } from "../lib/constants";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "../context/ActiveSectionContext";
import { useState } from "react";
import { BsCaretRightFill, BsList } from "react-icons/bs";
import useMediaQuery from "../hooks/useMediaQuery";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [toggleMenu, setToggleMenu] = useState(false);

  const isAboveThisWidth = useMediaQuery("(min-width:535px");

  return (
    <header className="relative z-[999]">
      {isAboveThisWidth ? (
        ""
      ) : toggleMenu ? (
        ""
      ) : (
        <button
          className="fixed right-5 top-5 rounded-md border bg-gray-900/10 p-1 text-3xl text-gray-900/50 transition hover:scale-[1.15] hover:text-gray-900/90  active:scale-95 dark:border-white/50 dark:bg-slate-900 dark:text-gray-50"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <BsList />
        </button>
      )}

      <motion.div
        className={`${
          isAboveThisWidth ? "fixed" : toggleMenu ? "fixed" : "hidden"
        } left-1/2 top-0 flex h-auto w-full -translate-x-1/2 items-center justify-center rounded-none border border-white/40 bg-white shadow-lg shadow-black/30  dark:border-blue-100/30 dark:bg-slate-500 sm:top-6 sm:h-[50px] sm:w-[650px] sm:rounded-full`}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="relative flex">
          <ul className="flex flex-wrap items-center justify-center gap-5 py-2 ">
            {Links.map((link, index) => (
              <li
                key={`${link.name + index}`}
                className={`${
                  activeSection === link.name
                    ? "rounded-md bg-gray-200 font-medium dark:bg-gray-900/60  sm:rounded-full "
                    : ""
                } p-2 sm:p-1`}
              >
                <a
                  href={link.href}
                  className="grid place-items-center px-0 transition  sm:px-3 "
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {isAboveThisWidth ? (
            ""
          ) : (
            <button
              className="  bg-gray-900/10 text-2xl text-gray-900/50 transition hover:scale-100 hover:bg-gray-900/20  active:scale-90 dark:border-white/50 dark:bg-slate-900 dark:text-gray-50"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <BsCaretRightFill />
            </button>
          )}
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
