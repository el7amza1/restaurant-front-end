import React from "react";
import { Button,Image } from "react-bootstrap";
import Cards from "./Cards";
import { ReactComponent as PizzaIcon} from "../imgs/pizza-icon.svg"
import { ReactComponent as Burgar} from "../imgs/pizza-icon.svg"

const Menus = () => {
    return (
        <div>

            <div className="d-flex gap-3 justify-content-center m-5 p-3" id="menu">
                <Button className="btn btn-outline-danger" variant=" rounded-0">Danger</Button>
                <Button className="btn btn-outline-danger " variant=" rounded-0">
                    <PizzaIcon style={{width:"15px" }} className="icons"/> 
                    <span> Pizza</span>
                    </Button>
                <Button className="btn btn-outline-danger" variant=" rounded-0">Danger</Button>
                <Button className="btn btn-outline-danger" variant=" rounded-0">Danger</Button>
            </div>
            <Cards />
        </div>



    )
}

export default Menus