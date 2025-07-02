# 1. useContext vs Redux.
- both are used to manage states of react application
- useContext can be used in less complex applications where state needs to be changed in limited component. redux can be used where complex state changes are required.
- useConext can be used when state management required within component tree. scope of redux is within whole redux application.
- useContext is lightweited and it comes along with standard react librery. For redux external library required which includes reducers, actions and store.

# 2. Advantage of using Redux Toolkit over Redux.
- redux toolkit simplyfy use of redux.
- fewer syntax.
- it has built-in support for debugging.
- it uses immer hence immutability issue will be solved.
- faster deelopment and easier backward compatability.

# 3. Explain Dispatcher. 
- dispatcher used to dispatch an action which will be used by reducer functions to update the state of store.

# 4. Explain Reducer.
- createSlice will have listof reducers defined and it will export slice.reducer function which will be used by configStore to create store.

# 5. Explain slice.
- slice is part of store. its created by createSlice function given by redux devtoolkit.
- it has name, initial state and list of reducers.
- reducer should be passed to configstore while creation of store.

# 6. Explain selector.
- its used to subscribe to particular section of the store given by redux.
- whenever that state of the store changes it will provide updated value.

# 7. Explain createSlice and the configuration it ta4e7
- createSlice given by redux toolkit. it takes name, initialState and list of reducers. slice.reducer will be passed to configStore while creating store
