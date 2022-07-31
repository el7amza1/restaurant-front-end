import path from "path"
import { useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import Cart from "../components/Cart"
import Items from "../components/items"

const CartForm = ({ setTimein, timein }: any) => {
    const handelTime = ()=> {
        setTimein(true)
        console.log(timein);
        
    }
    setTimeout(() => {
        if (timein== true){
            
            setTimein(!timein);
            
        }
        window.location.replace("http://localhost:3000/")
        

    }, 5000);
    return (
        <div className="p-5 m-5 d-flex">
            <Form className="w-75">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div onClick={handelTime}>
                    <Link to="/sucses" >
                        submit
                    </Link></div>
            </Form>
            <div className="w-25">
                <Items ></Items>

            </div>
        </div>
    )
}

export default CartForm
