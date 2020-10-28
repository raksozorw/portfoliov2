import React from "react";
import { Link } from "react-router-dom";

export default function PatchPlants() {
  return (
    <div
      className='patch'
      style={{
        color: "white",
        backgroundImage:
          "url(" +
          require("/Users/oskarwroz/Documents/WebDev-Projects/portfoliov2/portfoliov2/src/assets/patch/A37901EC-C108-4CE7-82AB-10AE859E1B6B.jpeg") +
          ")",
      }}
    >
      <h1>Hello Patch Plants!</h1>
      <img
        src={require("/Users/oskarwroz/Documents/WebDev-Projects/portfoliov2/portfoliov2/src/assets/patch/75508671-5A76-4975-8C8A-5029CB7F1B9D.jpeg")}
        alt='myplants'
      ></img>
      <h2>
        Why not check out my <Link to='/project/0'>projects</Link> while you're
        here{" "}
        <Link
          id='next-project-link'
          to='/project/0'
          style={{ marginLeft: "10px" }}
        >
          ➔
        </Link>
      </h2>
    </div>
  );
}
