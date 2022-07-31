import React, { useState } from "react";
import {Image} from "react-bootstrap"
import Pizza1 from "../imgs/pizza1.jpg"
import Pizza2 from "../imgs/pizza2.jpg"
import Pizza3 from "../imgs/pizza3.jpg"
import Pizza4 from "../imgs/pizza4.jpg"
import Pizza5 from "../imgs/pizza5.jpg"
import {BsPlusLg} from "react-icons/bs"
import {FaMinus} from 'react-icons/fa'
const Cards = ()=>{
            const [count , setCount] = useState([
              {
                id: 1,
                itemName: 'seafood pizza',
                ingredients: ['snail', 'fish', 'shrimp'],
                price: 140,
                orderQty: 0,
                category: 'pizza',
                popular: true,
                imgUrl : Pizza2
                
              },
              {
                id: 2,
                itemName: 'chicken ranch pizza',
                ingredients: ['chicken', 'ranch sauce'],
                price: 120,
                orderQty: 0,
                category: 'pizza',
                popular: true,
                imgUrl : Pizza3
              },
              {
                id: 3,
                itemName: 'Cheese mix pizza',
                ingredients: ['snail', 'fish', 'shrimp'],
                price: 140,
                orderQty: 0,
                category: 'pizza',
                popular: true,
                imgUrl : Pizza4
              },
              {
                id: 4,
                itemName: 'chicken ranch pizza',
                ingredients: ['chicken', 'ranch sauce'],
                price: 120,
                orderQty: 0,
                category: 'pizza',
                popular: true,
                imgUrl : Pizza5
              },
              {
                id: 5,
                itemName: 'beef burger',
                ingredients: ['beef', 'cheese', 'lattice'],
                price: 45,
                orderQty: 0,
                category: 'burger',
                popular: true,
                imgUrl : Pizza1
              },
              {
                id: 6,
                itemName: 'beef burger',
                ingredients: ['beef', 'cheese', 'lattice'],
                price: 45,
                orderQty: 0,
                category: 'burger',
                popular: true,
                imgUrl : Pizza1
              },
              {
                id: 7,
                itemName: 'beef burger',
                ingredients: ['beef', 'cheese', 'lattice'],
                price: 45,
                orderQty: 0,
                category: 'burger',
                popular: true,
                imgUrl : Pizza1
              },
              {
                id: 8,
                itemName: 'beef burger',
                ingredients: ['beef', 'cheese', 'lattice'],
                price: 45,
                orderQty: 0,
                category: 'burger',
                popular: true,
                imgUrl : Pizza1
              },
              {
                id: 9,
                itemName: 'espresso',
                ingredients: ['coffee'],
                price: 35,
                orderQty: 0,
                category: 'drinks',
                popular: false,
                imgUrl : Pizza1
              },
              {
                id: 10,
                itemName: 'mocha',
                ingredients: ['coffee', 'chocolate'],
                price: 55,
                orderQty: 0,
                category: 'drinks',
                popular: true,
                imgUrl : Pizza1
              },
              {
                id: 11,
                itemName: 'espresso',
                ingredients: ['coffee'],
                price: 35,
                orderQty: 0,
                category: 'drinks',
                popular: false,
                imgUrl : Pizza1
              },
              {
                id: 12,
                itemName: 'mocha',
                ingredients: ['coffee', 'chocolate'],
                price: 55,
                orderQty: 0,
                category: 'drinks',
                popular: true,
                imgUrl : Pizza1
              },
            ])
    // const initialMenuItems = ;
      // const increment = () => {
      //   setCount((c) => c + 1);
      // };
    return (
        <div className="container mt-40">
                <div className="row mt-30">
            {count.map((ele,indx)=>{
                return (
                    
                        <>
                    <div className="col-md-4 col-sm-6  mb-3" key={indx}>
                        <div className="box m-2">
                        <Image className="pic-1" src={ele.imgUrl}></Image>
                        <span className="count ">{ele.orderQty}</span>
                            <div className="box-c">
                                <h3 className="title">{ele.itemName} <br />Price = 120$</h3>
                                <ul className="icon">
                                    <li onClick={()=> ele.orderQty - 1}><span><FaMinus></FaMinus></span></li>
                                    {/* <span>
                                        
                                    </span> */}
                                    <li onClick={()=> ele.orderQty + 1 }><span><BsPlusLg></BsPlusLg></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
            </div>

        </div>

    )
}

export default Cards