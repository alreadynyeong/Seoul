import { BrowserRouter, Routes, Route } from "react-router-dom";
import City from "./page/City";
import Home from "./page/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:title" element={<City />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
