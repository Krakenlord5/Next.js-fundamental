"use client";

import React, { useState } from 'react'

const Hero = () => {

  const [ value , setValue ] = useState(0)

  const addValue = ()=> {
    setValue(value + 1)

  }

  const subValue = ()=> {
    setValue(value - 1)

  }

  return (

    
    <div className='text-3xl'>
      <p>{value}</p>
      <button onClick={addValue}>add</button>
      <br></br>
      <button onClick={subValue}>subtract</button>
    </div>
  )
}

export default Hero