import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import Logo from '../imgs/logo.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import Delivery from "../imgs/delivery.png"
const NavBar = (): JSX.Element => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);


    return (
        <Navbar className="navbar navbar-dark nav-bar position-fixed fixed-top" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link className="link" to="/">
                        <div>
                            <b style={{ fontSize: 20 }}>OBSD</b> <Image src={Logo} className="w-25" />
                        </div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id=" basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#menu">Menu</Nav.Link>
                        <Nav.Link href="#link">Most Popjlar</Nav.Link>
                        <Nav.Link onClick={handleShow}>
                            <Image src={Delivery} className="w-25" />
                        </Nav.Link>
                        <Cart show={show} setShow={setShow} ></Cart>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default NavBar