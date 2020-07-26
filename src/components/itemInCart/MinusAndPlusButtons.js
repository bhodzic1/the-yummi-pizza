import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../icons';



const MinusAndPlusButtons = ({product}) => {
    const { increase, decrease, removeProduct } = useContext(CartContext);

    return (
        <div className="buttonsInCartList">
                <div className="increaseButtonDiv">
                    <button 
                        onClick={() => increase(product)}
                        className="btn btn-primary btn-sm mr-2 mb-1 increaseButton">
                            <PlusCircleIcon width={"20px"}/>
                    </button>
                </div>
                 {
                     product.quantity > 1 &&
                     <div className="decreaseButtonDiv">
                        <button
                        onClick={() => decrease(product)}
                        className="btn btn-danger btn-sm mb-1 decreaseButton">
                            <MinusCircleIcon width={"20px"} className="minusButton" />
                        </button>
                    </div>
                 }

                {
                    
                    product.quantity === 1 &&
                    <div className="decreaseButtonDiv">
                        <button
                        onClick={() => removeProduct(product)}
                        className="btn btn-danger btn-sm mb-1 decreaseButton">
                            <TrashIcon width={"20px"}/>
                        </button>
                    </div>
                 }
            </div>
    )
}


export default MinusAndPlusButtons;