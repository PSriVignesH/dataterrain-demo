import { Input } from '@/components/ui/input'
import { Search} from 'lucide-react'
import React, { Fragment } from 'react'

const SearchInput = () => {
  return (
    <div className='relative'>
    <Input placeholder='search' className='w-[450px] h-[64px] placeholder:text-gray-500  placeholder:font-normal text-[16px] rounded-[5px] px-[23px] py-[19px] shadow-navbar relative'/>
    <Search className='absolute right-[25px] top-[20px]  h-[25px] w-[25px] text-gray-500'/>
    </div>
  )
}

export default SearchInput
