import React from 'react'
import SidebarHeader from '../SidebarHeader/SidebarHeader'
import { upcomingInterviews } from '@/app/constants'
import InterviewList from '../InterviewList/InterviewList'

const UpcomingInterviews = () => {
  return (
    <div className='w-[340px] h-[380px]'>
      <SidebarHeader title='Upcomings'/>
       <div className='mt-[50px]'>
         <div className='pb-5'>
          {
            upcomingInterviews.map((interview,i)=>(
              <InterviewList interviewList={interview} key={i}/>
            ))
          }
          </div>
       </div>
    </div>
  )
}

export default UpcomingInterviews