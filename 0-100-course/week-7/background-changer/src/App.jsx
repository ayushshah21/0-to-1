import { } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Backgrounds from "./components/Backgrounds";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Backgrounds/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
