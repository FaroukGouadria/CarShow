
import './App.css';
import {Route ,Switch,Redirect}from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product"; 
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <>
    <Header/>

    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/contact" component={ Contact } />
      <Route exact path="/products" component={ Product } />
      <Route exact path="/products/:id" component={ ProductDetail } />
    </Switch>
    </>
  );
}

export default App;
