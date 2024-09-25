# 1. What is the difference between Named Export, Default export and \* as export?

- In es6 there are two different type of imports/exports 1. named export and 2. default export

## named export

- we can have multiple named exports in file.
- while importing exact name of export should be mentioned inside {}.
- ex: export const comp1; exports comp1 from this file. import {comp1} from "filepath"; will import comp1 in another file.
- while importing give different name using as. ex: import {comp1 as component} from "filepath";

## default export

- we can have only 1 default export per file.
- no need to speify exact name while importing and directly can import without {}.
- ex: export default comp1; will defaultly export comp1. import comp1 from "filepath"; will export comp1 in another file directly.

## \* as export

- it will export all the named imports into a single variable mentioned in import statement. it wont include default export.
- ex: <br/>export const MyComponent = () => {} <br/>export const MyComponent2 = () => {} <br/>export const MyComponent3 = () => {}</br> will be imported as,
  import \* as MyComponents from "filepath"; we can use them is jsx as, <br /> <MainComponents.MyComponent />
  <MainComponents.MyComponent2 />
  <MainComponents.MyComponent3 />

# 2. What is the importance of config.js file

-

# 3. What are React Hooks?

# 4. Why do we need a useState Hook?
