import React, { useState, useEffect } from "react";
import projectList from "../assets/projectList";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function ProjectPage() {
  const [selectedProjectId, setSelectedProjectId] = useState(0);
  //we take the id out of the params to choose which project to display based on index (same as param)
  const { id } = useParams();
  // converted from string to number... not really sure why I made it a string
  const numberId = parseInt(id, 10);

  const nextProject = () => {
    if (numberId < projectList.length - 1) {
      setSelectedProjectId(numberId + 1);
    } else {
      setSelectedProjectId(0);
    }
  };

  const renderTitle = () => {
    return <h1>{project.name}</h1>;
  };

  useEffect(() => {
    nextProject();
  }, [id]);

  const project = projectList[id];
  console.log(id);

  return (
    <div className='project-page-background'>
      <div className='back-bar'>
        <Link to='/'>x</Link>
        <Link id='next-project-link' to={`/project/${selectedProjectId}`}>
          ➔
        </Link>
      </div>
      <div className='project-page'>
        <div>
          <h1>{project.name || "Project"}</h1>
        </div>
        <div className='pp-image-and-links'>
          <img src={project.img} alt={project.name}></img>
          <div className='pp-links'>
            <a href={project.site} target='_blank' rel='noopener noreferrer'>
              <h2>Link</h2>
            </a>
            <a href={project.github} target='_blank' rel='noopener noreferrer'>
              {" "}
              <h2>Github</h2>
            </a>
          </div>
        </div>
        <div className='pp-info-columns'>
          <div>
            <h3>What it's made of:</h3>
            <p>{project.stack}</p>
          </div>
          <div>
            <h3>What it does:</h3>
            <p>{project.description}</p>
          </div>
          <div>
            <h3>What Could Improve:</h3>
            <p>{project.improvements}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
