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

  // the ref div that's rendered is an adjustable reference point to choose when to change the variable title
  // it is tranform tranlated up using css media queries to function best for each screen
  // laptop and large screens aim to transition when about half of the new project image is on the screen
  // tablets aim to change when 100px below the image is visible
  // small devices change when the bottom of the image enters (div is not translated at all)

  return (
    <div className='project' id={props.project.key}>
      <Link to={`/project/${props.index}`}>
        <img src={props.project.img} alt={props.project.name}></img>

        <div className='ref-div' ref={setRef}></div>
      </Link>
    </div>
  );
}
