import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from Namaste React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// =============================
// How to Create Nested Elements
// =============================

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "I am h1 heading of child1"),
    React.createElement("h2", { id: "heading" }, "I am h2 heading of child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "I am h1 heading of child2"),
    React.createElement("h2", { id: "heading" }, "I am h2 heading of child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
