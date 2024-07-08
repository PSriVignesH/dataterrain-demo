import { Interview } from '@/app/constants'
import { Button } from '@/components/ui/button'
import React, { FC } from 'react'


interface InterviewListProps{
  interviewList:Interview
}
const InterviewList:FC<InterviewListProps>= ({interviewList}) => {
  return (
    
    <div className='flex items-center justify-between mx-5 my-12'>
         <div className="flex flex-col items-center gap-[10px] w-[54px] h-[54px] p-1" style={{ backgroundColor: interviewList.backgroundColor }}>
          <h1 className="text-[14px] font-medium leading-5 text-center" style={{ color: interviewList.color }}>
           {interviewList.interviewDate}
          </h1>
          <h1 className="text-[12px] font-normal leading-4 text-center" style={{ color: interviewList.color }}>
              {interviewList.interviewMonth}
          </h1>
    </div>
         <div className='flex flex-col items-center justify-between gap-1'>
            <h1 className='text-[12px] font-medium leading-4 text-center text-[#3E3E3E]'>
              Interview with {interviewList.roleName}
            </h1>
            <h1 className='text-[12px] font-normal leading-4 text-center text-[#3E3E3E]'>
              Created by <span className='text-[12px] font-medium leading-4 text-center text-[#0B74AD] '>
                {interviewList.candidateName}
             </span>
            </h1>
            <h1 className='text-[10px] font-normal leading-[13px] text-center text-[#3E3E3E]'>
              {interviewList.interviewTime}
            </h1>
         </div>
         <Button className='w-[70px] h-[36px] rounded-[5px] bg-[#0A66C2] text-[#FFFFFF] text-[12px] font-normal leading-4'>
          Details
         </Button>
    </div>
  )
}

export default InterviewList 