
import './App.css';
import {Route ,Switch,Redirect}from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product"; 
import Header from './components/Header';
function App() {
  return (
    <>
    <Header/>

    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/contact" component={ Contact } />
      <Route exact path="/products" component={ Product } />
    </Switch>
    </>
  );
}

export default App;
