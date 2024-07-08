import React from 'react'
import Logo from '../Navbar/Logo'
import SearchInput from '../Navbar/SearchInput'
import NavBarMenu from '../Navbar/NavBarMenu'


const Navbar = () => {
  return (
    <div className='hidden md:flex w-full h-[125px] p-8 bg-[#FFFFFF] shadow-navbar  items-center justify-between mb-16'>
       <Logo/> 
       <SearchInput />
       <NavBarMenu/>
    </div>
  )
}

export default Navbar