import React, { useContext } from "react";
import { ThemeContext } from "../../App";

export default function UseContext() {
  const darkTheme = useContext(ThemeContext);

  const themeStyle = {
    background: darkTheme ?  "#333" : "#ccc",
    color: darkTheme ?  "#ccc" : "#333",
    margin: "2rem",
    padding: "2rem",
  };
  return <div className="container" style={themeStyle}>Hi</div>;
}
