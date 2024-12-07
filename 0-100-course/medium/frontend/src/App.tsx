import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Signup from './pages/SignUp'
import Signin from './pages/SignIn'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import NavbarWrapper from './components/NavbarWrapper'
import Publish from './pages/Publish'


function App() {
  // Check token directly from localStorage
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  }

  return (
    <BrowserRouter>
      <NavbarWrapper />
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated() ? <Navigate to="/blogs" /> : <Navigate to="/signin" />} 
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route 
          path="/blog/:id" 
          element={isAuthenticated() ? <Blog /> : <Navigate to="/signin" />} 
        />
        <Route 
          path="/blogs" 
          element={isAuthenticated() ? <Blogs /> : <Navigate to="/signin" />} 
        />
        <Route 
          path="/publish" 
          element={isAuthenticated() ? <Publish /> : <Navigate to="/signin" />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
