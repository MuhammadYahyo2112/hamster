import React from 'react'
import { Link } from 'react-router-dom'

const BottomNav = () => {
  return (
    <div>
        <Link className='btn' to={"/"}>Home</Link>
        <Link className='btn' to={"/Main"}>Main</Link>
        <Link className='btn' to={"/Frends"}>Frends</Link>
        <Link className='btn' to={"/"}></Link>
        <Link className='btn' to={"/"}></Link>
    </div>
  )
}

export default BottomNav