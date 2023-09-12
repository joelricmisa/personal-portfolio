import myPic from "../assets/images/me.png";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="bg-gray-50/10">
      <div className="min-w-screen relative inset-0 min-h-screen overflow-hidden pt-40">
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-6  px-10 md:w-[700px] ">
          <div className="relative h-24 w-24">
            <img
              src={myPic}
              alt="profile picture"
              className="rounded-full border-[5px] border-white object-cover  shadow-xl"
            />
            <span className="absolute bottom-1 right-0 text-3xl">👋</span>
          </div>

          <h1 className="text-center text-2xl leading-loose text-gray-950">
            <strong>Hello, I'm Joel Ric Misa</strong> I'm a
            <strong> frontend developer</strong> with
            <strong> 4 years</strong> of experience. I enjoy building
            <em> sites & apps</em>. My focus is
            <span className="ml-2 underline">React JS</span>.
          </h1>

          <div className="flex gap-4">
            <button
              type="button"
              className="introButton bg-gray-900 text-white"
            >
              Contact me here <BsArrowRight />
            </button>
            <button type="button" className="introButton">
              Download CV <HiDownload />
            </button>
            <a
              href="https://www.linkedin.com/in/joel-ric-misa-2803a7243/"
              target="_blank"
              className="introButton"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/joelricmisa"
              target="_blank"
              className="introButton"
            >
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
