import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const jsxHeading = <h1 id="heading">This heading is written with JSX</h1>;

// Functional Component:

const HeadingComponent = () => {
  return <h1>This is Heading Component</h1>;
};

// this can also be written as:
const HeadingComponent2 = () => (
  <div>
    {/* You can call components with these three ways */}
    {HeadingComponent()}
    <HeadingComponent />
    <HeadingComponent></HeadingComponent>
    <h1>This another way to write functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
