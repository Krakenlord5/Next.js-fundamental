"use client";

import React, { useState } from 'react'
import { CardUser } from '@/components'

const page = () => {
    const [ name , setName ] = useState('');
    const [ email , setEmail ] = useState('');
    const [ save , setSave ] = useState(false);
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSave = (e) => {
        setSave(!save)
        console.log('aaaaaa')
    }
  return (
    <div className='grid justify-center align-middle items-center h-screen bg-purple-500'>
        {
            !save &&
        
            <div className='bg-white w-80 h-80 rounded-xl flex flex-col justify-around text-center'>
                <h1 className='text-2xl'><b>Profile</b></h1>
                <input type="text" placeholder='Name' onChange={handleName} className='w-48 grid self-center border-4 rounded-lg border-black' ></input>
                <input type="email" placeholder='Email' onChange={handleEmail} className='w-48 grid self-center border-4 rounded-lg border-black' ></input>
                <br></br>
                <button onClick={handleSave}>Submit</button>
                {name},
                {email}
        
            </div>
        }
        {
            save && <div>
            <CardUser name={name} email={email} age='' address=''></CardUser>
            <button onClick={handleSave}>Submit</button>
            
            
            
            </div>
            

            
        }
    </div>
  )
}

export default page