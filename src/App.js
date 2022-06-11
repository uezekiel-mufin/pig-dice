import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import HowTo from "./Help/HowTo";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/howto' element={<HowTo />} />
      </Routes>
    </div>
  );
}

export default App;
