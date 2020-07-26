import React, { useContext } from 'react';
import './itemInCart.css';
import MinusAndPlusButtons from './MinusAndPlusButtons';


const ItemInCart = ({product}) => {

    return (
        <div className="divOfCartList">
            <div className="nameDiv"><p className="nameOfProduct">{ product.name }</p>
            <p className="quantityOfProduct">Quantity: { product.quantity }</p>
            </div> 
            <MinusAndPlusButtons product={product} />
        </div>
    )
}

export default ItemInCart;