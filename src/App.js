import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Nav from "./components/Nav";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
