# 1. What are various ways to add images into our App? Explain with code examples
- if image locally present we can use import. ex:
import logo from './assets/logo.png';
function App() {
  return `<img src={logo} alt="Logo" />`;
}
- if image locally present we can use require to import image. ex2:
`<img src={require('./assets/logo.png')} alt="Logo" />`
- if importing from external url, ex3: `<img src="https://example.com/logo.png" alt="Logo" />;`
- using css and setting background image. `background-image: url('./assets/logo.png');`
- using common public folder in react app. ex: `<img src="/images/logo.png" alt="Logo" />` here images folder is in public
# 2. What would happen if we do console.log(useState())?
- it will return array with 2 item. first one is state variable which will be undefined. second one is callback function which is used to change state variable.
# 3. How will useEffect behave if we don't add a dependency array ?
- if no dependency array passed it be called whenever component loads.
- if empty dependency array passed if will be called only once when first time component loads. after rendering html then useEffect will get called.
- if some dependency is present in array then useEffect will be called during initial time when component loads + whenever dependency mentioned in array changes. its like case2+case3
# 4. What is SPA?
- Without refresh navigation will happen in react. Components will be already loaded at start. Using react-router-dom application will nativate between component without refreshing page. This is why its called single page application. 
# 5. What is difference between Client Side Routing and Server Side Routing?
- server side routing means traditional webbrowsers whenever some link is clicked, request is made to server and then content(css, js, html) is downloaded and new contents are loaded. page will refresh during this process.
- client side routing means in react when links are clicked react-router-dom will directly change url path(using link) without doing request to server. later it will call fetch and then loads the data. this is done without refreshing the page.
- https://reactrouter.com/6.28.0/start/overview