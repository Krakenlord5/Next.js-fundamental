import React from 'react'
import { ReactElement } from 'react'
import { faAngry, faBuildingLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faApplePay } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='navbar'>
        <FontAwesomeIcon icon={faApple} className='w-5' />
        <p>ร้าน</p>
        <p>Mac</p>
        <p>iPad</p>
        <p>iPhone</p>
        <p>Watch</p>
        <p>AirPods</p>
        <p>TV และบ้าน</p>
        <p>ความบันเทิง</p>
        <p>อุปกรณ์เสริม</p>
        <p>ความช่วยเหลือ</p>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
    </div>
  )
}

export default Navbar