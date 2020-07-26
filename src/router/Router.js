import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Order from '../components/order/Order';
import NavigationBar from '../components/navigationBar/NavigationBar';
import Home from '../components/home/Home';
import Cart from '../components/cart/Cart';


const Router = () => {
    return ( 
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route path="/" component={ Home } exact />
                <Route path="/order" component={ Order } />
                <Route path="/cart" component={ Cart } />
            </Switch>
        </BrowserRouter>
        
    )
}

export default Router;