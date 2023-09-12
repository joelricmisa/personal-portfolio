import SectionHeading from "../components/SectionHeading";
import { skillsData } from "../lib/constants";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section>
      <div className="mx-auto max-w-[700px] px-5 ">
        <SectionHeading>Skills</SectionHeading>
        <ul className="flex flex-wrap items-center justify-center gap-5">
          {skillsData.map((skill, index) => (
            <li
              key={`${skill + index}`}
              className="rounded-md border border-black/10  bg-gray-100/30 px-3 py-2 text-gray-700 shadow-md"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
