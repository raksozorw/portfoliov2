import React, { useState } from "react";
import Skills from "./Skills";

export default function Footer() {
  const [content, setContent] = useState("skills");
  // page toggles between the about or contact, defaults about

  const handleClick = (entry) => {
    setContent(entry);
  };

  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='ft-list'>
          <h3
            onClick={() => handleClick("skills")}
            style={content === "skills" ? { color: "#ff7373" } : {}}
          >
            Skills
          </h3>
          <h3
            onClick={() => handleClick("about")}
            style={content === "about" ? { color: "#ff7373" } : {}}
          >
            About
          </h3>
          <h3
            onClick={() => handleClick("contact")}
            style={content === "contact" ? { color: "#ff7373" } : {}}
          >
            Contact
          </h3>
        </div>
        <div className='ft-content-right'>
          {content === "skills" && <Skills />}
          {content === "about" && (
            <div>
              <p>
                I'm a self taught developer from Vancouver, BC. I fell in love
                with coding as a creative outlet, a way to solve interesting
                problems, a constant inspiration for learning, and a way to keep
                my mind sharp and focused. When I'm not writing code, I'm
                singing in a rock n roll band, skiing fresh powder, clicking a
                camera shutter, learning a foreign language, or petting a cat.
              </p>
            </div>
          )}

          {content === "contact" && (
            <div>
              <a href='mailto:oskarwroz@gmail.com'>
                <h4>oskarwroz@gmail.com</h4>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className='copyrights'>Oskar Wroz 2020. All Rights Reserved.</div>
    </div>
  );
}
