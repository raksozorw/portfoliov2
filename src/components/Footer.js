import React, { useState } from "react";

export default function Footer() {
  const [content, setContent] = useState("about");
  // page toggles between the about or contact, defaults about

  const handleClick = () => {
    if (content === "about") {
      setContent("contact");
    } else {
      setContent("about");
    }
  };

  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='ft-list'>
          <h3 onClick={handleClick}>About</h3>
          <h3 onClick={handleClick}>Contact</h3>
        </div>
        <div className='ft-content-right'>
          {content === "about" ? (
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
          ) : (
            <div>
              <a href='mailto:oskarwroz@gmail.com'>
                <h4>oskarwroz@gmail.com</h4>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
