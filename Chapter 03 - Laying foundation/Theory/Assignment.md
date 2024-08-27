# 1. What is JSX?

- jsx is html-like or xml-like syntax. it increases readability of code.
- jsx is not react. react can be written without using jsx
- jsx is not html.
- jsx makes dev life easier.
- jsx is javascript and jsx is not javascript since it cannot be understood by browsers.
- ex: const heading = <h1>this is jsx</h1>;
- for multiline jsx use (), `const heading = (`
  `<h1>`
  `this is jsx`
  `</h1>`
  `);`
- to write javascript inside jsx we use {}. Ex: `const x = 100; const heading = <h1>i love jsx {x}</h1>;`

# 2. React.createElement vs JSX

- React.createElement is very hard to use and makes dev life hard.
- Jsx is user friendly html-like syntax.
- `const head = React.createElement("h1", {id:"head"}, "i like react");`
- `const head = <h1 id="head">i like react</h1>`
- above code means same thing.

# 3. Superpowers of JSX

- JSX writes code in simplified manner which makes life of dev easier.
- JSX prevents cross-site script attacks (type of injection attack.) so loading js inside jsx is safer.

# 4. Babel & parcel role in JSX

- during bundling code is passed to parcel. Here JSX is transpiled to js code(React.createElement) by babel.
- jsx => babel => React.createElement => Object => HtmlElement(render)

# 5. Components

- there are two type of components in react. class based(old) and functional based(new).
- functional component means js function which returns jsx or react element
- ways to write functional component
- - `const Title = () => (<h2>this is a fc</h2>);`
- - `function Title () { return <h1>this is a fc</h1>;}`
- - `const Title = function () { return (<h1>this is a fc</h1>)};`
- ways to call component
- - `<Title />`
- - `<Title> </ Title>`
- - `{Title()}`

# 6. Composing Components

- calling one component inside another component is called component composition

# 7. Role of type attribute in script tag? What options can I use there?

- type attribute tells type of the contents which is between `<script></script>`. Default type = 'text/javascript'

- syntax: `<script type='text/javascript'></script>`
- text/javascript: this value indicates that the script is following the EcmaScript standard
- module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- text/babel: This value indicates that the script is a babel type and required bable to transpile it.
- text/typescript: scipt is written in typescript

# 8. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

- `{TitleComponent}` it means jsx/js variable TitleComponent is loaded here
- `{<TitleComponent/>}` it means component TitleComponent is executed here and retuens jsx/ react component and loaded here
- `{<TitleComponent></TitleComponent>}` if this component has no child then its equivalent to `<TitleComponent />`.
- otherwise child components are there then `<TitleComponent><Header /><Footer /></TitleComponent>` equivalent to this jsx will be returned and executed
