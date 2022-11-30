import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import FrontPage from "./pages/FrontPage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
