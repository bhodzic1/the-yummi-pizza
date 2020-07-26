import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemInCart from '../itemInCart/ItemInCart';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import './cart.css';
import ConfirmOrder from './ConfirmOrder';


const Cart = () => {
    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    const [show, setShow] = useState(false);
    
    return (
        <div className="majorCartDiv">
            <div className="text-center mt-5">
                <h1>YOUR CART</h1>
            </div>
            <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        <div className="itemListDiv">
                        <ListGroup>
                        { 
                            cartItems.length > 0 ?
                            cartItems.map(pizza => ( 
                                <div>
                                    <ListGroup.Item><ItemInCart key={pizza.id} product={pizza} ></ItemInCart></ListGroup.Item>
                                </div>
                            )) :
                            <div className="p-3 text-center text-muted emptyCartDiv">
                                Your cart is empty
                            </div>
                        }
                        </ListGroup>
                        </div>
                        {   show &&
                            <ConfirmOrder show={ show } onHide={() => setShow(false)  }/>
                        }
                        {
                            checkout && 
                            <div className="p-3 text-center text-success">
                                <p>Checkout successfull</p>
                                <Link to="/order" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3 cartBillDiv">
                            <div className="card card-body cartBill">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{ itemCount }</h4>
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right">{ total }</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="checkOutButton" onClick={ () => setShow(true) }>CHECKOUT</button>
                                    <button type="button" className="clearButton" onClick={ clearCart } >CLEAR</button>
                                </div>

                            </div>
                        </div>
                    }
                    
                </div>
        </div>
    )

}


export default Cart;