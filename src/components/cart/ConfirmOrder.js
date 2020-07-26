import React, { useState, useContext } from 'react'; 
import { Modal, Button, Form } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const ConfirmOrder = (props) => {
    const { cartItems, total, checkout, handleCheckout } = useContext(CartContext);
    const address = useState("");
    const phoneNumber = useState("");
    const specialNote = useState("");

    const validateOrder = () => {

    }

    return (
      <>
        <Modal
          {...props}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>CONFIRM ORDER</Modal.Title>
          </Modal.Header>
          <Form>
          <Modal.Body>
            <div>
                {cartItems.map(item =>
                    <p>{ item.name } x {item.quantity}</p>
                )}
                ${total}
            </div>
            <hr />
            <Form.Label>Phone number:</Form.Label>
            <Form.Control type="text" placeholder="+452000000" />
            <Form.Label>Adress:</Form.Label>
            <Form.Control type="text" />
            <Form.Label>Special note:</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Modal.Body>
          <Modal.Footer>
            <Button className="clearButton" onClick={props.onHide}>
              CLOSE
            </Button>
            <Button className="checkOutButton" type="submit" onClick={handleCheckout}>CONFIRM</Button>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }


export default ConfirmOrder;