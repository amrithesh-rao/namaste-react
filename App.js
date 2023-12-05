
const head = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "h1",
        { id: "children" },
        "Im thanos"
        )
    );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(head);