import ReactDOM from "react-dom/client";
import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import RouteError from "./components/RouteError";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./contexts/userContext";

// import Grocery from "./components/Grocery";
// lazy loading: it wont be bundled along with all other in single file. seperate bundle file for grocery component
// when first time Grocery called it will loaded(which will take some time to load) and put into cache. next time onwords its fetched from cache.
// this import is not same as above import. its a different function
const Grocery = lazy(() => import("./components/Grocery"));
const ContactUs = lazy(() => import("./components/ContectUs"));

const FoodApp = () => {
  const [userName, setUserName] = useState("DefaultName");

  return (
  <userContext.Provider value={{ userName: userName, setUserName}}>
    <div className="food-app">
      <userContext.Provider value={{ userName: "Groot"}}>
        <Header />
      </userContext.Provider>
      <Outlet />
    </div>
  </userContext.Provider>
)};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Suspense fallback={<h1>loading.....</h1>}><ContactUs /></Suspense>
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>loading.....</h1>}><Grocery/></Suspense>
        // fallback will take component or jsx. this will be displayed till grocery is loaded
      }
    ],
    errorElement: <RouteError />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
