"use client";

import React, {useEffect} from 'react'
import { mockUsers } from '@/constant'
import { CardUser } from '@/components';

const page = () => {

    useEffect(()=>{

        console.log(mockUsers)

    },[])





  return (
    <div>
        {
            mockUsers && mockUsers.map(
                (value) => {
                    return (
                        <CardUser name={value.name} age={value.age} address={value.address} email={value.email} />
                    )
                }
            )
        }
    </div>
  )
}

export default page