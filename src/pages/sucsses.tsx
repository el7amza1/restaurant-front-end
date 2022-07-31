import React from 'react'
import TrueImg from '../imgs/true.png'
import { Image } from 'react-bootstrap'
const Sucsses = () => {
  return (
    <div className=' order'>
      <Image src={TrueImg}></Image>
      <div>
        <h2>
            ORDER PLACED
        </h2>
      </div>
    </div>
  )
}

export default Sucsses
