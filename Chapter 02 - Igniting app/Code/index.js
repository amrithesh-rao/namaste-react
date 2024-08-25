import React from "react";
import ReactDOM from "react-dom/client";

const ele = React.createElement("div", { id: "parent"},
    React.createElement(
        "div", 
        { id: "child1"},
        [
           React.createElement("h2", {}, "first"),
           React.createElement("h2", {}, "second") 
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);