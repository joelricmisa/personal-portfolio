import { BsMoon, BsSun } from "react-icons/bs";
import { useThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      type="button"
      className="fixed bottom-5 right-5  grid h-[50px]  w-[50px] place-items-center  rounded-full border border-black/50  bg-slate-300 text-gray-950 shadow-2xl outline-none backdrop-blur-[0.5rem] transition hover:scale-[1.15] active:scale-95 dark:border-white/50 dark:bg-slate-900 dark:text-gray-50"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeButton;
