import { Separator } from '@/components/ui/separator'
import { EllipsisVertical } from 'lucide-react'
import React from 'react'
import MeetingInfoCard from '../MeetingInfoCard/MeetingInfoCard'
import { IntervewDetails } from '@/app/constants'

const InterviewInfo = () => {
  return (
    <div className="h-[561px] w-[950px] bg-white rounded-[1px] shadow-navbar">
      <div className='flex items-center justify-between mx-[33px] mt-[47px] mb-[16px] '>
        <h1 className='text-[22px] font-medium leading-[33px] text-black items-start'>
          Today Interviews Meetings Info
        </h1>
        <EllipsisVertical className='h-[18px] w-[18px]'/>
      </div>
      <Separator className='mb-[57px] w-full'/>
      <div className='flex overflow-x-scroll scrollbar-thin'>
        {
          IntervewDetails.map((interview,i)=>(
             <MeetingInfoCard interviewDetail={interview} key={i}/>
          ))
        }
      </div>
    </div>
  )
}

export default InterviewInfo