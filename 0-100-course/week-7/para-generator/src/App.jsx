import { } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Paragen from "./components/Paragen";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Paragen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
