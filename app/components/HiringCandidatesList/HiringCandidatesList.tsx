import { Hiring } from '@/app/constants'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { FC } from 'react'


interface HiringCandidatesListProps{
  hiringCandidates:Hiring
}

const HiringCandidatesList:FC<HiringCandidatesListProps>= ({hiringCandidates}) => {
  return (
    <div className='flex flex-col items-center justify-between mx-5 my-10'>
      <div className='flex items-center justify-between gap-[12px]'>
           <Image src={hiringCandidates.imgUrl} height={70} width={70} alt='iconm' className='rounded-full'/>
           <div className='flex flex-col items-center justify-between gap-[10px]'>
             <h1 className='text-[16px] leading-[18px] font-medium text-[#3E3E3E]'>
               {hiringCandidates.candidateName}
             </h1>
             <h1 className='text-[14px] leading-[12px] font-normal text-[#3E3E3E]'>
                {hiringCandidates.role}
             </h1>
             <h1 className='text-[11px] leading-[14px] font-normal text-[#3E3E3E]'>
              Hired by : {hiringCandidates.hiredBy}
             </h1>
           </div>
           <Button className='w-[74px] h-[37px] rounded-[5px] border-[1px] border-[#0A66C2] px-[14px] py-[9px] text-[0A66C2] text-[12px] leading-[18px] bg-white font-normal hover:bg-white hover:text-[#0A66C2]'>
             Details
           </Button>
      </div>

    </div>
  )
}

export default HiringCandidatesList