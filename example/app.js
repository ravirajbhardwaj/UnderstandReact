import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

// reuseable component
const FrameWork = (props) => {
  console.log("Props", props);

  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("p", {}, props.type),
  ]);
};

// components
const Programming = () => {
  return React.createElement("div", {}, [
    React.createElement("h4", {}, "JavaScript"),
    React.createElement("h4", {}, "Python"),
    React.createElement("h4", {}, "Rust"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { title: "heading" }, "Understand React"),
    React.createElement(Programming),
    React.createElement(FrameWork, { name: "React", type: "Frontend" }),
    React.createElement(FrameWork, { name: "Express", type: "Backend" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));

// render is where React changes the DOM, so let’s do the updates ourselves.

// createElement param (type, props, children)
// props is another object, it has all the keys and values from the JSX attributes.
