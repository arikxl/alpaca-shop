import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './styles/App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Products from './pages/Products';
import Register from './pages/Register';
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';


const App = () => {

  const user = true;

  return (
    <Router>
      <Switch>
        <Route exact path ="/">
          <Home />
        </Route>
        <Route path ="/products/:category">
          <ProductList />
        </Route>
        <Route path ="/product/:id">
          <Product />
        </Route>
        <Route path ="/cart">
          <Cart />
        </Route>
        <Route path ="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path ="/register">
        {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
