import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const Product = ({ product }) => {
    const { addProduct, cartItems , increase } = useContext(CartContext);
    
    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return (
        <div>
            <p className="productListName">{ product.name }</p>
            <p className="productListIngredients">{ product.ingredients }</p>
            <div>
                {
                    isInCart(product) && 
                    <div className="buttonPriceDiv">
                        <button 
                        onClick={() => increase(product)}
                        className="addMoreButton">ADD MORE</button>
                        <p className="productListPrice">${product.price}</p>
                    </div>
                }

                {
                    !isInCart(product) && 
                    <div className="buttonPriceDiv">
                        <button 
                        onClick={() => addProduct(product)}
                        className="addToCartButton">ADD TO CART</button>
                        <p className="productListPrice">${product.price}</p>
                    </div>
                }

            </div>
        </div>
    )
}


export default Product;