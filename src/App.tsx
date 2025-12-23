
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

