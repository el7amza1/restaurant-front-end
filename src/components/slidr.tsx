import React from "react";
import {Container , Image} from "react-bootstrap"
import Pizza from "../imgs/pizza-img1.png"
import Crerp from "../imgs/cerpe.png"
import Burgar from "../imgs/burgar.png"

const Slidr = ():JSX.Element => {
    return (
        <div className="bg-d p-4">
                <h1 className="h1">
                    <b>ENJOY OUR <br/> DELICIOUS <span>FOOD</span></b>
                </h1>
                <div className="div-img-s">
                <Image className="img-s1" src= {Pizza}></Image>
                {/* <Image className="img-s2" src= {Crerp}></Image>
                <Image className="img-s3" src= {Burgar}></Image> */}
                </div>
        </div>
    )
}

export default Slidr
