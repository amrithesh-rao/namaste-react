# 1. Is JSX mandatory for React?

- JSX not mandatory for React. JSX is HTML-like makes life of developer easier.

# 2. Is ES6 mandatory for React?

- ES6 is not mandatory for React but recommended. We use ES6 feature like arrow functions, let var, const, destructure etc alot in React. We can use create-react-app library to build react app without ES6 support.

# 3. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

- {TitleComponent} returns whole function TitleComponent.
- {<TitleComponent/>} returns jsx.
- {<TitleComponent></TitleComponent>} same as {<TitleComponent/>} which will return jsx if no child is passed otherwise wraps children along with titlecomponent and return jsx.

# 4. How can I write comments in JSX?

- to write comments in JSX use `{/* this is a comment */}`

# 5. What is <React.Fragment></React.Fragment> and <></> ?

- React fragment lets you return multiple child components without need of extra parent DOM element to wrap it.
- <></> is shorthand for React.Fragment
- React.Fragment may take key as argument (during mapping array) which will differentiate it from shorthand.
- https://legacy.reactjs.org/docs/fragments.html

# 6. What is Virtual DOM?

- Virtual DOM is javascript representation(blueprint) of UI. Virtual DOM is kept in memory and is synced to Real DOM using library such as ReactDOM.

# 7. What is Reconciliation in React?

- React compares older and newer version of virtual DOM and renders real DOM in each render cycle(like when setState is called). This is called as reconciliation(diffing) in React.
- Reconciliation involves scheduling. It means when the work should be performed. Work is the result of state update here. (like when setState is called)

# 8. What is React Fiber?

- React fiber is reconciliation algo introduced in React 16.
- React fiber uses incremental rendering. It means work is divided into chunks and spread it out out multiple frames.
- Because fiber is asynchronous React fiber we can do,
- - pause, stop and reuse the work as new update comes in.
- - assign priority to different type of updates.
- https://github.com/acdlite/react-fiber-architecture

# 9. Why we need keys in React? When do we need keys in React?

- we use key as argument to components inside map fuction during listing.
- It helps react to understand which item is changed, modified or added.

# 10. Can we use index as keys in React?

- we can use index as a key as a last resort but its not recommended.
- it might negatively affect performance of application. if list is modified/sorted react wont be able to make out difference between updated list and may not get rendered correctly.
- https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

# 11. What is props in React? Ways to

- propes means properties. Props are arguments passed to components.
- ex:`<Header x="abc" y="def"/>` here x and y are aruments.

# 12. What is a Config Driven UI ?

- Ui is driven based on configuration of data which application receives.
- it makes application dynamic. It reduces effort to develop the application and makes ui interactive with user.
- It gives generic interface which will help to scale the application.
