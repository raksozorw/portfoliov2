import React, { useContext, useEffect } from "react";
import useOnScreen from "./useOnScreen";
import { BoxContext } from "../context/context";
import { Link } from "react-router-dom";

export default function Intro() {
  const ctx = useContext(BoxContext);

  const [setRef, visible] = useOnScreen({ threshhold: 1 });

  useEffect(() => {
    visible && ctx.setTitle("Projects");
  }, [visible]);

  return (
    <div className='intro' ref={setRef}>
      <h1>
        I'm Oskar, a{" "}
        <a
          href='https://github.com/raksozorw'
          target='_blank'
          rel='noopener noreferrer'
        >
          Web Developer
        </a>{" "}
        based in London.
      </h1>
      <h1>
        Some examples of <Link to='/project/0'>my work</Link> are below.
      </h1>
      <h1>
        See my code for them on{" "}
        <a
          href='https://github.com/raksozorw'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github.
        </a>
      </h1>
      <h1>
        <a href='mailto:oskarwroz@gmail.com'>Contact me</a> by email for work
        enquiries.
      </h1>
    </div>
  );
}
