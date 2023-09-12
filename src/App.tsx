import Header from "./components/Header";
import SectionDivider from "./components/SectionDivider";
import About from "./pages/About";
import Intro from "./pages/Intro";

function App() {
  return (
    <div className="relative h-[5000px]">
      {/* Background Blur Design */}
      <div className="absolute left-0 top-0  -z-10 h-[20rem] w-full overflow-hidden rounded-full  bg-red-200 blur-[10rem]  "></div>
      <div className="absolute left-0 top-[10rem]  -z-10 h-[20rem] w-full overflow-hidden rounded-full  bg-slate-300 blur-[10rem]  "></div>
      <div className="absolute left-0  top-[20rem] -z-10 h-[20rem] w-full overflow-hidden  rounded-full bg-blue-100 blur-[10rem]  "></div>

      <Header />
      <Intro />
      <SectionDivider />
      <About />
    </div>
  );
}

export default App;
