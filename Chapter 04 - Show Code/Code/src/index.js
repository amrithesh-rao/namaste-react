import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContectUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const FoodApp = () => (
  <div className="food-app">
    <Header />
    <Body />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <ContactUs />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
