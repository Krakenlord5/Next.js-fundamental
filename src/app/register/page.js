"use client";

import React, { useState } from 'react'

const page = () => {
    const [ name , setName ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ password , setPassword ] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setName(e.target.value)
    }

  return (
    <div className='grid justify-center align-middle items-center h-screen bg-purple-500'>
        <div className='bg-white w-80 h-80 rounded-xl flex flex-col justify-around text-center'>
            <h1 className='text-2xl'><b>Sign Up</b></h1>
            <input type="text" placeholder='Name' onChange={handleName} className='w-48 grid self-center border-4 rounded-lg border-black' ></input>
            <input type="email" placeholder='Email' onChange={handleEmail} className='w-48 grid self-center border-4 rounded-lg border-black' ></input>
            <input type='password' placeholder='Password' onChange={handlePassword} className='w-48 grid self-center border-4 rounded-lg border-black' ></input>
            <br></br>
            <button>Submit</button>
            {name},
            {email},
            {password}
        </div>
    </div>
  )
}

export default page