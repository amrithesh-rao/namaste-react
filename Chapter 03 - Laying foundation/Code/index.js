import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./img/logo.png";
import pc from "./img/pc.png";
import "./style.css";

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

let x = "writing js inside jsx";
// component composition
const Compo4 = () => (
  <div className="container">
    <Compo3 />
    <h1>journey just started</h1>
    {Compo3()}
    <h2>just started</h2>
    <p>{x}</p>
    {heading2}
  </div>
);

// assign1
const testHeader = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "head1"),
  React.createElement("h2", {}, "head2"),
  React.createElement("h3", {}, "head3"),
]);
const testHeader2 = (
  <div className="title">
    <h1>head1</h1>
    <h2>head2</h2>
    <h3>head3</h3>
  </div>
);

const Title = () => (
  <div className="title">
    <h1 style={{ color: "red" }}>head1</h1>
    <h2 style={{ color: "yellow" }}>head2</h2>
    <h3>head3</h3>
    <AnotherComponent />
  </div>
);

const AnotherComponent = () => <h3>Another component</h3>;

//assign2
const HeaderComponent = () => (
  <div className="container">
    <div>
      <img src={logo} />
    </div>
    <div className="center">
      <input type="text" placeholder="Type anything.." />
    </div>
    <div>
      <img src={pc} />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Compo4 />);
// root.render(testHeader2);
// root.render(<Title></Title>);
root.render(<HeaderComponent />);
// root.render(Title());
