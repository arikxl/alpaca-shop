import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './styles/App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Products from './pages/Products';
import Register from './pages/Register';
import { useSelector } from 'react-redux';



const App = () => {

  const user = useSelector((state)=>state.user.currentUser);
  // const user = false;
  console.log( user)

  return (
    <Router>
      <Switch>
        <Route exact path ="/alpaca-shop">
          <Home />
        </Route>
        <Route path ="/products/:category">
          <Products />
        </Route>
        <Route path ="/product/:id">
          <Product />
        </Route>
        <Route path ="/cart">
          <Cart />
        </Route>
        <Route path ="/login">
          {user ? <Redirect to="/alpaca-shop" /> : <Login />}
        </Route>
        <Route path ="/register">
        {user ? <Redirect to="/alpaca-shop" /> : <Register />}
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
