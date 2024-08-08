# 1. What is Emmet?

Emmet is a extension used in vscode. 
It increased productivity for html and css.

## Emmet tips:

- Use cntl+space to see what will be printed by emmet abbreviation 
- ! can be used to write html template
- General syntax for emmet abbreviation is <tagname>[attributes]
    ex: div[data=john]
- To generate content inside tag use <tagname>{} 
    - ex: div{this is text}
- Nested element can be written using div>p>h1
- Sibling element can be written using div+p
- multiple element can be created using *
    - div>p*3
    - div>p{three me $}*3 here '$' is used to print numbers
    - div>p{three me $@5}*3 '@N' can be used to specify base number
    - div>p{three me $@5-}*3 '-' can be added after '@N' indicate reverse order   
- id can be created using # and class can be added using .
    example: div#ind.claA.claB
- () used to organize together abbrebiation.
    ex: div>(div>p{$}*2+a)*3
- to generate dummy line of text we can use lorem
    - lorem5 generates 5 random words
    - lorem*5 generates 5 lines of text

# 2. Difference between library and framework.

## Library
- library is a useful prewritten code by thirdparty which can be used in portion of code. 
- code will be calling library here.
- Ex: React etc.

## Framework
- Its also code written by thirdparty people. But it will provide basic structure for code.
- Framework will have total control here. Entire code should follow syntax of framework here.
- Frame work will call code and library.
- Ex: Angular

# 3. What is cdn? where we use it.

- CDN is network of servers distributed across all around geographical locations.
- It is used delivery content such as webpages, styles, css, digital contents, video etc quickly and efficiently to users.
- Code stored in source server is duplicated in multiple cache servers to provide fast data.
- Load is adjusted across multiple servers for incoming request.
- Its protected agaist cyber attacks.
- Whenever user requests data from cdn, from nearest server information will be provided to him to keep reduced travel time of packets.

- CDN used to load static asset like css, html, js to web application.
- used in video streaming, gaming, software deployment, ecommerese etc

# 4. Why React is known as React?

- React is very fast, responsive and efficient. It only rerenders required parts of app by observing change in state of the component.

# 5. What is crossorigin in script tag?

- crossorigin attribute enables CORS request. It means origin(current running webapp) can do CORS request(a http request) resource sharing with link written in script tag. 
- two values can be set to this attribute. crossorigin = 'annonymous' or crossorgin = 'use-credential'
- if no value mentioned it is by default anymous.
- anonymous means while doing CORS request no details like creds and cookies etc are passed. for use-credential its passed. 
- ex: <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script> in this react app enables CORS requset anonymously (without sending creds or cookis) with api mentioned in src which is hosted in different domain. 
- The crossorigin attribute in the script tag enables CrossOrigin Resource Sharing (CORS) for loading external JavaScript
files from different origin than the hosting web page. This
allows the script to access resources from the server hosting
the script, such as making HTTP requests or accessing data.

# 6. What is diference between React and ReactDOM?

- React can we used in mobile, web etc. For these purpose common code(to create element, for components and hooks) is written and its in React library
- To use react inside web we use ReactDOM.
- We can create elements or use tools provided by React library but to render data into website or to nativegate and other functionality we use ReactDOM.

# 7. What is difference between react.development.js and react.production.js files via CDN?

- react.development.js cdn should be used during development of app and react.production.js should be used in production code
## react.development.js
- additional debugging information be there, increased code size, decreased performance, some tools added to catch the isses, more warnings
## react.produciton.js
- no debugging info, reduced and optimised size, opmised performance, less warnings

# 8. What is async and defer?

- we can pass attibute aync or defer to script tag.
## async
- if async is given ie <scipt async src"some link"/>. It means,
    - html parcing will be going on. when it hits script tags, html parcing and script tag loading happens parallely.
    - when script tag loads and it is available then, html parcing will stop and loaded script will execute.
    - after script is loaded again html parcing continues.
    - Note: if multiple script tag with aync is there then order of execution of script tag may change.
    - Ex: if multiple independent scipts like google analytics, weather api etc are there then we should use async.  
## defer
- defer can be used like <scipt defer src"some link"/>. It means,
    - html parcing is going on, then first html parcing will complete.
    - during html parcing flow itself script tag will loaded in parallel and once html parcing is completed, then loded script tag will be executed.
    - order of execution will not change if multiple script tags are there. hence its more useful
    - only works with external src path. with local path it doesnt work.
    - Ex: if script tags should be executed once html parcing completely done then we should use this
## no async or defer
- if no async or defer used,
    - html parcing will be going on
    - html parcing will stop once it hits script tag
    - script tag will be loaded then executed
    - after this html parcing will continue