import React from "react";
import SectionHeading from "../components/SectionHeading";
import { projectsData } from "../lib/constants";
import ProjectCard from "../components/ProjectCard";
import useSectionInView from "../hooks/useSectionInView";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <div className="mx-auto max-w-[700px] px-5">
        <SectionHeading>My Projects</SectionHeading>
        {projectsData.map((item, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
