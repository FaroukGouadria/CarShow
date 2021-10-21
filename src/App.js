
import './App.css';
import {Route ,Switch,Redirect}from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product"; 
function App() {
  return (
    <>
    <Switch>
      <Route exact to="/" component={ Home } />
      <Route exact to="/about" component={ About } />
      <Route exact to="/contact" component={ Contact } />
      <Route exact to="/Products" component={ Product } />

    </Switch>
    </>
  );
}

export default App;
