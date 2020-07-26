import React from 'react';
import './App.css';
import { CartProvider } from './context/CartContext';
import PizzaList from './components/pizzaList/PizzaList';
import { Cart } from './components/cart/Cart';
import Converter from './components/converter/Converter';

const App = () => {
  
  return (
    <CartProvider>
      <div>
        <Converter />
        <PizzaList />
      </div>
    </CartProvider>
  )
}

export default App;
