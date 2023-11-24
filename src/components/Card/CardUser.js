import React from 'react'
import Image from 'next/image'

const CardUser = (props) => {
  return (
    <div>
        <Image width={200} height={200} src="https://images3.alphacoders.com/889/thumb-350-889694.png"/>
        {props.name}
        {props.email}
        {props.age}
        {props.address}
    </div>
  )
}

export default CardUser