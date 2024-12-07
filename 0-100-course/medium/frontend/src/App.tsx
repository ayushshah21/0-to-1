import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/SignUp'
import Signin from './pages/SignIn'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Navbar from './components/Navbar'
import NavbarWrapper from './components/NavbarWrapper'


function App() {

  return (
    <>
      <BrowserRouter>
      <NavbarWrapper />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
