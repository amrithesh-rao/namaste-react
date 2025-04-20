# 1. What is prop drilling?
- props drilling is a process where props are passed down through nested layers of components.
- props are passed from parents to children components by passing through nested components.
- difficult to maintain if application size becomes large.

# 2. What is lifting the state up?
- instead of managing state at children component it can be done at parent component and state and functions can be passed to children component as props.
- the process of moving state from lower level component (children) to higher level component (parent) is known as lifting up state.
- When a child component needs access to certain data or needs to modify the data, instead of keeping that data and the corresponding state management solely within the child component, we move the state to a shared ancestor component
# 3. What is Context Provider and Context Consumer?
- we cannot use prop drilling in huge application as its difficult to maintain the structure. So instead we use react context api.
- createContext is used to create a context.
- Context consumer is used get the state is class based component. In functional component we can use `useContext(<contextName>)` hook.
- Context Provider is used to modify the value in a context and provide it to children components.
- By using the Context Provider and Context Consumer, you can avoid prop drilling and make it easier to share global or shared state across different parts of your React application. This is particularly useful when passing data to deeply nested components without explicitly passing the data through each intermediate component. 
- https://legacy.reactjs.org/docs/context.html

# 4. If you don’t pass a value to the provider does it take the default value?
- yes it will take default vaalue