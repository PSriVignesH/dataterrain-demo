import React, { FC } from 'react'

interface SidebarHeaderProps{
  title:string
}

const SidebarHeader:FC<SidebarHeaderProps>= ({title}) => {
  return (
    <div className='flex items-center justify-between '>
      <h1 className='text-[#3E3E3E] font-medium text-[22px] leading-[30px]'>
        {title}
      </h1>
      <h1 className='text-[#0A66C2] text-[16px] font-normal leading-6 underline'>
        View All
      </h1>
    </div>
  )
}

export default SidebarHeader