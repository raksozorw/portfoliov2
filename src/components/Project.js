import React, { useContext, useEffect } from "react";
import useOnScreen from "./useOnScreen";
import { BoxContext } from "../context/context";
import { Link } from "react-router-dom";

export default function Project(props) {
  const ctx = useContext(BoxContext);

  //this hook sets visible to true when the ref appears on screen
  const [setRef, visible] = useOnScreen({ threshhold: 1 });

  useEffect(() => {
    visible && ctx.setTitle(props.project.name);
    visible && ctx.setProject(props.project);
  }, [visible]);

  // not sure if this is the best way to do this
  // when the div is clicked to go to the project, the project state is changed in context to show the desired project
  // const directToProject = () => {
  //   ctx.setProject(props.project);
  // };

  // visible && directToProject();

  return (
    <div className='project' id={props.project.key}>
      <Link to={`/project/${props.index}`}>
        <img src={props.project.img} alt={props.project.name}></img>
        <div ref={setRef}></div>
      </Link>
    </div>
  );
}
