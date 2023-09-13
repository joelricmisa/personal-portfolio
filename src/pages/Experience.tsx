import React from "react";
import SectionHeading from "../components/SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/constants";
import useSectionInView from "../hooks/useSectionInView";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  return (
    <section ref={ref} id="experience" className="scroll-mt-32">
      <div>
        <SectionHeading>My Experience</SectionHeading>
        <br />
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "#f3f4f6",
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "rgb(55 65 81)",
                  color: "white",
                  fontSize: "1.5rem",
                }}
              >
                <h1>{item.title}</h1>
                <p>{item.location}</p>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
