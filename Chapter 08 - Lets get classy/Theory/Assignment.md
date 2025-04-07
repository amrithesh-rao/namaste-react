# 1. How do you create Nested Routes react-router-dom cofiguration

# 2. Read abt createHashRouter, createMemoryRouter from React Router docs.
- HashRouter -> after # request is not sent to server but before # request will sent to server during navagation. "changes in the URL after the # symbol do not trigger a full page reload"
- MemoryRouter -> location are internally stored in memory. "it allows you to create an in-memory router for testing or other scenarios where 
you don't want to interact with the actual browser's URL. "
# 3. What is the order of life cycle method calls in Class Based Components
- constructor: it will be called first when component gets called
- render(): it will be called next. till this render phase.
- componentDidMount(): this function will get called once dom gets updated. till this its commit phase.
- componentDidUpdate(): render will happen when props changes or setState gets called. during this time dom will update and then this function gets called.
- componentWillUnmount(): when component ditaches from dom, for cleanup purpose it will get called.
# 4. Why do we use componentDidMount?
- this will get called once component gets attached to dom during inital time.
- its helpful when we have to do some api calls after initial component render time.
# 5. Why do we use componentWillUnmount? Show with example
- if some listeners are there which should be removed when component detaches from dom we use this function.
- basically used to clear up details
- ex: `componentWillUnmount() { removeAlllisteners('resize'); clearInterval(this.timer)}`
# 6. Why do we use super(props) in constructor?
- classes are extended from React.Component. Our class is child class and React.Component is parent class here. To set params in React.Component we call super(props).
# 7. Why can't we have the callback function of useEffect async?
- Return Value Expectation: useEffect is used to handle side effects in application and it will return callback function which is used to cleanup. if we made it async then it should return promise and it doesnt make sense. This is one reason.
- Execution Order and Timing: we might not full control of execution of aync operation and cleanup callback function. React may not understand when to perform cleanup  