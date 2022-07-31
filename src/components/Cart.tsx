import React, { useState } from 'react';
import { Nav, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Items from './items';

function Cart( {show,setShow}: any) {

    const handleClose = () => setShow(!show);



    return (
        <>
            <Modal className='fixed-end' show={show} onHide={handleClose}>
                <Items/>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Link to="/cart" onClick={handleClose}>
                        Save Changes
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Cart