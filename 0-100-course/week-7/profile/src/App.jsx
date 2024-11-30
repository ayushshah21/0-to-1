import { useState } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
