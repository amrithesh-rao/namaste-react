# 1. When and why do we need lazy()?
- Bundler will bundle every components into single file. Because of this size of that file will increase. Lazy will make sure component passed to it is bundled seperately and lazy will load component only when it gets called for the first time. Next time onwards from cache component will be loaded.
- its also known as lazy loading, dynamic loading, dynamic bundling, code splitting, chunking etc
- uses: Code Splitting and Reducing Initial Bundle Size, Improved Performance, Faster initail load time, Better User Experience, reduces browser caching, Optimizing Mobile Performance
- ref: https://react.dev/reference/react/lazy 
# 2. What is suspense? When do we and why do we need suspense?
- its a component used in react. it will disaplay component mentioned in fallback argument until is children finishes loading.
- used to manage asynchronous data fetching and code-splitting in our applications.
- It is primarily used in combination with the lazy() function for dynamic imports and with the React.lazy() component to improve the user experience when loading data or components asynchronously.
- Advantages: improve user experience, code splitting, handles asynchronous loading etc
# 3. Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?
- react was synchronously loading data by doing client side rendering but component was just getting loaded into webpage at that time. so react went to suspended state.
- to handle such asynchrnous component calls should use Suspend component with a fallback.
- till the component loads, jsx passed to Suspense will be displayed.
# 4. Advantages and disadvantages of using this code splitting pattern?
- Advantages: Code Splitting and Reducing Initial Bundle Size, Improved Performance, Faster initail load time, Better User Experience, reduces browser caching, Optimizing Mobile Performance
- Disadvantages: Complex Configuration, initial loading delay, Route-Based Splitting should be used to take advantage, introduces asyn loading, not all framework supports code splitting, testing difficulties 
