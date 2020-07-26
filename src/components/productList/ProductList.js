import React, { useState, useEffect } from 'react';
import Product from '../product/Product';
import pizzaService from "../../pizzaService";
import './productList.css';
import { ListGroup } from 'react-bootstrap';


const PizzaList = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        getPizzas();
    })

    const getPizzas = () => {
        pizzaService().then(pizza => {
        setPizzas(pizza);
        });
    };
    return (
      <div className="productListDiv">
        <ListGroup variant="flush">
          { pizzas.map(pizza => (
            <ListGroup.Item><Product key={pizza.id} product={pizza}></Product></ListGroup.Item>
          )) }
        </ListGroup>
      </div>
    );
}

export default PizzaList;