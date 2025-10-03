import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1",{id: "heading"}, "Hello World");

const jsxHeading = <h1 id="heading">This heading is written with JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);