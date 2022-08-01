import { count } from 'console'
import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import { BsPlusLg } from "react-icons/bs"
import { FaMinus } from 'react-icons/fa'
const Item = ({ ele }: any) => {
    const [count, setCount] = useState(0)
    const increment = () => {

        setCount(count + 1)
    }
    return (
        <>
            <div className="col-md-4 col-sm-6  mb-3" >
                <div className="box m-2">
                    <Image className="pic-1" src={ele.imgUrl}></Image>
                    <span className="count ">{count}</span>
                    <div className="box-c">
                        <h3 className="title">{ele.itemName} <br />Price = 120$</h3>
                        <ul className="icon">
                            <li onClick={() => setCount(ele.orderQty -= 1)}
                            ><span
                            ><FaMinus></FaMinus></span></li>
                            {/* <span>
                                        
                                    </span> */}
                            <li onClick={increment}><span><BsPlusLg></BsPlusLg></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item
