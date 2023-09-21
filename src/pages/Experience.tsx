import React from "react";
import SectionHeading from "../components/SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/constants";
import useSectionInView from "../hooks/useSectionInView";
import { useThemeContext } from "../context/ThemeContext";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.3);
  const { theme } = useThemeContext();
  return (
    <section ref={ref} id="experience" className="scroll-mt-36 sm:scroll-mt-32">
      <div>
        <SectionHeading>My Timeline</SectionHeading>
        <br />
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgb(219,234,254,0.1)",
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
                <h1 className="text-xl font-medium">{item.title}</h1>
                <p>{item.location}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
