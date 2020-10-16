import React, { useState, createContext } from "react";

export const BoxContext = createContext(null);

export default function BoxProvider({ children }) {
  const [title, setTitle] = useState("Projects");
  const [project, setProject] = useState({});

  return (
    <BoxContext.Provider
      value={{
        title,
        setTitle,
        project,
        setProject,
      }}
    >
      {children}
    </BoxContext.Provider>
  );
}
