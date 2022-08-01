import React, { useState } from "react";
import { Image } from "react-bootstrap"
import Pizza1 from "../imgs/pizza1.jpg"
import Pizza2 from "../imgs/pizza2.jpg"
import Pizza3 from "../imgs/pizza3.jpg"
import Pizza4 from "../imgs/pizza4.jpg"
import Pizza5 from "../imgs/pizza5.jpg"

import Item from "./item";
const Cards = () => {

  const items = [
    {
      id: 1,
      itemName: 'seafood pizza',
      ingredients: ['snail', 'fish', 'shrimp'],
      price: 140,
      orderQty: 0,
      category: 'pizza',
      popular: true,
      imgUrl: Pizza2

    },
    {
      id: 2,
      itemName: 'chicken ranch pizza',
      ingredients: ['chicken', 'ranch sauce'],
      price: 120,
      orderQty: 0,
      category: 'pizza',
      popular: true,
      imgUrl: Pizza3
    },
    {
      id: 3,
      itemName: 'Cheese mix pizza',
      ingredients: ['snail', 'fish', 'shrimp'],
      price: 140,
      orderQty: 0,
      category: 'pizza',
      popular: true,
      imgUrl: Pizza4
    },
    {
      id: 4,
      itemName: 'chicken ranch pizza',
      ingredients: ['chicken', 'ranch sauce'],
      price: 120,
      orderQty: 0,
      category: 'pizza',
      popular: true,
      imgUrl: Pizza5
    },
    {
      id: 5,
      itemName: 'beef burger',
      ingredients: ['beef', 'cheese', 'lattice'],
      price: 45,
      orderQty: 0,
      category: 'burger',
      popular: true,
      imgUrl: Pizza1
    },
    {
      id: 6,
      itemName: 'beef burger',
      ingredients: ['beef', 'cheese', 'lattice'],
      price: 45,
      orderQty: 0,
      category: 'burger',
      popular: true,
      imgUrl: Pizza1
    },
    {
      id: 7,
      itemName: 'beef burger',
      ingredients: ['beef', 'cheese', 'lattice'],
      price: 45,
      orderQty: 0,
      category: 'burger',
      popular: true,
      imgUrl: Pizza1
    },
    {
      id: 8,
      itemName: 'beef burger',
      ingredients: ['beef', 'cheese', 'lattice'],
      price: 45,
      orderQty: 0,
      category: 'burger',
      popular: true,
      imgUrl: Pizza1
    },
    {
      id: 9,
      itemName: 'espresso',
      ingredients: ['coffee'],
      price: 35,
      orderQty: 0,
      category: 'drinks',
      popular: false,
      imgUrl: Pizza1
    },
    {
      id: 10,
      itemName: 'mocha',
      ingredients: ['coffee', 'chocolate'],
      price: 55,
      orderQty: 0,
      category: 'drinks',
      popular: true,
      imgUrl: Pizza1
    },
    {
      id: 11,
      itemName: 'espresso',
      ingredients: ['coffee'],
      price: 35,
      orderQty: 0,
      category: 'drinks',
      popular: false,
      imgUrl: Pizza1
    },
    {
      id: 12,
      itemName: 'mocha',
      ingredients: ['coffee', 'chocolate'],
      price: 55,
      orderQty: 0,
      category: 'drinks',
      popular: true,
      imgUrl: Pizza1
    },
  ]






  return (
    <div className="container mt-40">
      <div className="row mt-30">
        {items.map((ele) => {
          return (

            <Item ele={ele}/>
      )
            })}
    </div>

        </div >

    )
}

export default Cards