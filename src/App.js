import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
