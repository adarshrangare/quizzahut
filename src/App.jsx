import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import { RootLayout, Home, About, Profile, Contact, QuizzHome } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/quizzes" element={<QuizzHome/>} />
      <Route path="/myaccount" element={<Profile/>} />
      <Route path="*" element={<Home/>} />
      
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
