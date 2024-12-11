import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/SignUp";
import Signin from "./pages/SignIn";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import NavbarWrapper from "./components/NavbarWrapper";
import Publish from "./pages/Publish";
import {UserContext } from "./context/UserProvider";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useContext } from 'react';

function App() {
  const userContext = useContext(UserContext);
  console.log('Current user state:', userContext);
  
  return (
    <>
        <BrowserRouter>
          <NavbarWrapper />
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/publish" element={<Publish />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
