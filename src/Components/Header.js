import React from 'react'
import { NavLink } from 'react-router-dom'

const Header=()=> {
  return (
    <div className='text-white w-full bg-white/50 flex justify-end border-b-2'>
      <NavLink to="home">
        home
      </NavLink>
      <button className='p-4'>login</button>
    </div>
  )
}

export default Header
