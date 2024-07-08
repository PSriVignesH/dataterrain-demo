import { NavbarMenuIcons } from '@/app/constants'
import Image from 'next/image'
import React from 'react'

const NavBarMenu = () => {
  return (
    <div className='w-[605px] h-[35px] mr-[90px] last:mr-0 flex items-center cursor-pointer justify-between'>
      {
        NavbarMenuIcons.map((icon,i)=>(
          <Image key={i} src={icon.imgURL} height={25} width={25} alt='icon'/>
        ))
      }
    </div>
  )
}

export default NavBarMenu