import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SidebarMenuIcons } from '@/app/constants'

const Sidebar = () => {
  return (
    <div className='hidden md:flex absolute left-0 top-[190px] rounded-r-[40px] w-[125px] h-[2466px] bg-[#ffffff]  flex-col gap-[65px] pt-12 items-center'>
             {
              SidebarMenuIcons.map((icon,i)=>(
                <div className={cn("h-[35px] w-[35px] bg-[#f4f4f4] rounded-[3px] flex items-center justify-center px-[5px] py-[6px] first:bg-[#EAF4FF] cursor-pointer",i===1 ? "bg-[#EAF4FF]" : "s")} key={i}>
                <Image src={icon.imgURL}  height={25} width={25} alt='icons'/>
                </div>
              ))
             }
    </div>
  )
}

export default Sidebar