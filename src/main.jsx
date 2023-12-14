import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Layout from "./components/Layout.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Company from "./components/Company/Company.jsx";
import ContactCompanyLayout from "./components/ContactCompanyLayout.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { BrowserRouter as Router, Routes } from "react-router-dom";
import Github from "./components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="company" element={<Company />} />
      <Route path="about" element={<About />} />

      <Route path="company/" element={<Company />} >
        <Route path=":company" element = {<Company />} />
      </Route>

      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
