import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Newproduct from "./pages/Newproduct";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import UserData from "./pages/UserData";
import AddNewEvent from "./pages/AddNewEvent";
import Category from "./pages/Category";
import CategoriesPage from "./pages/CategoriesPage";
import AllMenu from "./pages/AllMenu";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import EmpDash from "./pages/EmpDash";
import UserProfile from "./pages/UserProfile";
import EventData from "./pages/EventData";

const loggedIn = window.localStorage.setItem("isLoggedIn", true);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="menu" element={<AllMenu />} />
      <Route path="menu/:filterby" element={<Menu />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="newproduct" element={<Newproduct />} />
      <Route path="signup" element={<Signup />} />
      <Route path="cart" element={<Cart />} />
      <Route path="empDash" element={<EmpDash />} />
      <Route path="userProfile" element={<UserProfile />} />
      <Route path="category" element={<Category />} />
      <Route path="categoriesPage" element={<CategoriesPage />} />
      <Route path="userData" element={<UserData />} />
      <Route path="addNewEvent" element={<AddNewEvent />} />
      <Route path="eventData" element={<EventData />} />
      {/* 404 page */}
      <Route path="*" element={
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-red-500">404</h1>
          <p className="text-xl text-gray-600">Page Not Found</p>
        </div>
      } />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
