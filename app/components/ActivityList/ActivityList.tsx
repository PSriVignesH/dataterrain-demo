import { Activity } from '@/app/constants'
import Image from 'next/image'
import React, { FC } from 'react'


interface ActivityListProps{
  activity:Activity
}
const ActivityList:FC<ActivityListProps>= ({activity}) => {
  return (
    <div className='flex items-center justify-between mx-5 my-10 '>
      <div className='flex items-start justify-center gap-5'>
      <Image src={activity.imgUrl} height={63} width={63} alt='icon'/>
      <div className='flex flex-col items-center justify-between gap-[16px]'>
          <h1 className='text-[16px] leading-[18px] font-medium text-[#3E3E3E]'>
            {activity.candidateName} <span className='text-[13px] leading-[15px] font-medium text-[#0B74AD]'>[{activity.jobRole}]</span>
          </h1>
          <h1 className='text-[13px] leading-[16px] font-normal text-[#3E3E3E]'>
           Interview With {activity.interviewerName}
          </h1>
          <h1 className='text-[11px] leading-[13px] font-normal text-[#3E3E3E]'>
            {activity.activityTime}
          </h1>
      </div>
      </div>

    </div>
  )
}

export default ActivityList