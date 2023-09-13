import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return ( 
    <>
    <nav className={`${style.navbar_bg} w-100 text-white`}>
      <div className='d-flex justify-content-between'>
        <div>
          <Link to="/" className='fs-2 bold py-3 ps-5 d-inline-block text-decoration-none text-white'>START FRAMEWORK</Link>
        </div>
        <div className='pe-5'>
          <Link className='bold py-4 d-inline-block text-decoration-none text-white fs-5 px-2' to="About">About</Link>
          <Link className='bold py-4 d-inline-block text-decoration-none text-white fs-5  px-2' to="Portfolio">Portfolio</Link>
          <Link className='bold py-4 d-inline-block text-decoration-none text-white fs-5  px-2' to="Contact">Contact</Link>
        </div>
      </div>
    </nav>
    </>
  )
}
