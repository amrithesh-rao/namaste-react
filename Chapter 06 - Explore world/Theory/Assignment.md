# 1. What is a Microservice?
- Application is split into smaller interconnected services instead of building monolethic applications. Each service have its own world and they intercommunicate with each other.

# 2. What is Monolith architecture?
- Entire application shares massive codebase. Everything bundled together.

# 3. What is the difference between Monolith and Microservice?
- microservice are much simpler than monolith and easy to work with
- microservice are easy to scale and each service and be easily handled by multiple teams
- size of monolith application will be large and during deployment entire code needs to be deployed.

# 4. Why do we need a useEffect Hook?
- once the component renders useEffect will be called. so its helpful when we have to do something after each rendercyle.

# 5. What is Optional Chaining?
- its helpful during accessing nested objects without worrying that the value could be null or undefined.

# 6. What is Shimmer UI?
- When appication loads(may due to api calls) instead of displaying loader, flashy placeholder ui loads(like div boxes) in modern application(like yt, netflix etc). this ui is shimmer ui.
- main purpose of this is to make user feel less load time and keep user engaged. 

# 7. What is the difference between JS expression and JS statement
- expression are things which produces value. ex: (5+7)> 9 here 5, 7, (5+7), 9, entire thing is expression
- other ex: 1, "hello", 5 * 10, num > 100, isHappy ? "🙂" : "🙁", [1, 2, 3].pop()
- program is sequence of statement and each statement tells computer to do somthing.
- ex: let hi = 5; if (){//}; while(); return;
- http://joshwcomeau.com/javascript/statements-vs-expressions/

# 8. What is Conditional Rendering, explain with a code example
- based on condition we render something. we usually use terinary operator for this.
- ex: const Component = () => return x.length === 0 ? <renderSomething> ? <renderAnythingElse>

# 9. What is CORS?
- Its security feature used by websites which restricts website to request data from another domain.
- ex: you are running code from localhost and trying to access swiggy domain.
- we can use some parameter and make resource accessable for some api(backend needs to allow). 

# 10. What is async and await?
- js is syncronous single threaded language. asynchrnous things can be achived through async and await.
- async marks function as asynchronous. await should be used inside this function and it returns promise.
- await will block execution till promise resolves and then returns resolved value. should be used inside aync function.

# 11. What is the use of "const json = await data.json();" in getRestaurants()
- fetch returns promise which includes headers, status, body content etc.
- data.json will parse body and resolve response into js object. json will be converted to js object
- above will take time for large responses, thats why its a async task
- json is js notation. its a api response. it will be in string and key will be also string. we need to convert it to js object