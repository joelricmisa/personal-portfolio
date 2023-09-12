import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionDivider from "./components/SectionDivider";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="relative ">
      {/* Background Blur Design */}
      {/* <div className="absolute left-0 top-0  -z-10 h-[20rem] w-full overflow-hidden rounded-full  bg-gray-200 blur-[10rem]  "></div> */}
      <div className="absolute left-0 top-[10rem]  -z-10 h-[20rem] w-full overflow-hidden rounded-full  bg-slate-300 blur-[10rem]  "></div>
      <div className="absolute left-0  top-[20rem] -z-10 h-[20rem] w-full overflow-hidden rounded-full bg-blue-100 blur-[10rem]  "></div>

      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
