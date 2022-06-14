import "./App.css";
import { Routes, Route } from "react-router-dom";

import ItemDetail from "./components/ItemDetail";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  );
}

export default App;
