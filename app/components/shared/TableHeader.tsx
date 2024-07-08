import { Input } from '@/components/ui/input'
import { ListFilter, Search } from 'lucide-react'
import React, { FC } from 'react'

interface TableHeaderProps{
  title:string
}

const TableHeader:FC<TableHeaderProps>= ({title}) => {
  return (
    <div className='flex items-center justify-between mx-[34px] mt-[34px] mb-[20px]'>
          <div className='flex items-center justify-between gap-[64px]'>
               <h1 className='text-[28px] font-semibold leading-[42px] text-[#3E3E3E]'>{title}</h1>
               <h1 className='text-[20px] font-medium leading-[30px] text-[#0A66C2] pb-[2px] underline'>View All</h1>
          </div>
          <div className='flex items-center justify-between gap-[48px]'>
            <div className='relative'>
             <Input placeholder='search' className='w-[270px] h-[44px] placeholder:text-gray-500  placeholder:font-normal text-[16px] rounded-[5px] px-[23px] py-[19px] shadow-navbar relative'/>
             <Search className='absolute right-[13px] top-[10px]  h-[20px] w-[20px] text-gray-500'/>
           </div>
           <div className='h-[44px] w-[106px] p-4 flex items-center justify-center gap-[2px] shadow-navbar bg-[#fff]'>
               <ListFilter className='w-[20px] h-[23px] text-[#0A66C2]'/>
               <h1 className='text-[16px] font-normal leading-[24px] text-black'>
                Filters
               </h1>
           </div>
          </div>
      </div>
  )
}

export default TableHeader