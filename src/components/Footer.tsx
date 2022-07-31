import { Navbar, Image,Container } from "react-bootstrap"
import { Link } from "react-router-dom"

import Logo from '../imgs/logo.png'


const Footer = () => {
    return (
        <Navbar className="navbar navbar-dark nav-bar d-flex justify-content-center " expand="lg">
                        <Container>

            <Navbar.Brand href="#home" className="">
            <Link className="link" to="/">
                    <div>
                        <b style={{fontSize:20}}>OBSD</b> <Image src={Logo} className="w-25"/>
                    </div>
                    </Link>
            </Navbar.Brand>
            <Navbar.Text>
            <div >
                @ 2022 OBSD - All Right Reservd
            </div>
            </Navbar.Text>
            </Container>
            </Navbar>
            )
}

            export default Footer