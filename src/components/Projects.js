import React, { useContext } from "react";
import Project from "./Project";
import projectList from "../assets/projectList";
import { BoxContext } from "../context/context";
import { Link } from "react-router-dom";

export default function Projects() {
  const ctx = useContext(BoxContext);

  return (
    <div className='projects'>
      {/* variable title is the sticky scrolling header
           the project components each have function that changes the state of the text through Context when viewed */}
      <div className='variable-title' onClick={() => window.scrollTo(0, 0)}>
        <Link
          to={`/project/${ctx.project.key || "0"}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          {ctx.title}
        </Link>
      </div>

      {projectList.map((project, index) => {
        return <Project project={project} index={index} key={project.key} />;
      })}
    </div>
  );
}
