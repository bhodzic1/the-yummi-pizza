import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';



const Contact = () => {

    return (
        <div className="contactDiv">
            <h1 className="titleContact">CONTACT INFORMATION</h1>
            <Container>
                <Row className="rowContact">
                    <Col>
                        <div>
                            <p><i class="fa fa-fw fa-map-marker iconsContact"></i></p>
                            <h3>ADRESS</h3>
                            <h6>Company name, 16</h6>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p><i class="fa fa-fw fa-phone iconsContact"></i></p>
                            <h3>CONTACT PHONE</h3>
                            <h6>+385000000</h6>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p><i class="fa fa-fw fa-envelope iconsContact"></i></p>
                            <h3>E-MAIL</h3>
                            <h6>info@theyummipizza.com</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;