import { BsMoon } from "react-icons/bs";

const ThemeButton = () => {
  return (
    <button
      type="button"
      className="active:scale- fixed bottom-5  right-5 grid  h-[50px] w-[50px]  place-items-center rounded-full border  border-black/10 bg-slate-300 text-gray-950 shadow-2xl outline-none backdrop-blur-[0.5rem] transition hover:scale-[1.15]"
    >
      <BsMoon />
    </button>
  );
};

export default ThemeButton;
