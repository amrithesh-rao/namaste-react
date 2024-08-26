import React from "react";
import ReactDOM from "react-dom/client";

// jsx
const heading = <h1 className="head"> journey of a developer</h1>;
const heading2 = (
  <p>
    <h1>journey of a developer 2</h1>
    <h1>journey of a developer</h1>
  </p>
);

// components
const Compo1 = () => <h1>Saga of a developer</h1>;
const Compo2 = () => (
  <h2>
    saga <h3>developer</h3>
  </h2>
);
const Compo3 = () => {
  return <h3>journey and saga of developer</h3>;
};

// component composition
const Compo4 = () => (
  <div className="container">
    <Compo3 />
    <h1>journey just started</h1>
    <Compo3 />
    <h2>just started</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Compo4 />);
