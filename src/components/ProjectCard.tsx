import { projectsData } from "../lib/constants";

type ProjectProps = (typeof projectsData)[number];

const ProjectCard = ({ title, description, tags, imageUrl }: ProjectProps) => {
  return (
    <section>
      <div className="group relative mx-auto mb-10 flex w-full flex-col  overflow-hidden  rounded-xl border border-black/[0.1] shadow-lg sm:h-[350px] sm:flex-row">
        <div className="flex basis-1/2 flex-col  items-center gap-10 p-8">
          <div className="flex flex-col  ">
            <h1 className="mb-3 text-2xl font-medium text-gray-700">{title}</h1>
            <p>{description}</p>
          </div>
          <ul className="flex w-full flex-wrap justify-start gap-4 ">
            {tags.map((item, index) => (
              <li
                key={index}
                className="rounded-lg border border-black/10 bg-gray-700 p-2 text-white shadow-md shadow-gray-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <a href="#" className="hidden basis-1/2  sm:block">
          <img
            src={imageUrl}
            alt="Project Img"
            className="absolute -bottom-[20%] -right-[1%] h-full w-[300px]  self-end  rounded-md transition group-hover:-translate-x-3 group-hover:-translate-y-3  group-hover:-rotate-2
          group-hover:scale-105 "
          />
        </a>
      </div>
    </section>
  );
};

export default ProjectCard;
