import React from 'react'
import Heading from './components/Heading'
import Graph from './components/Graph/Graph'
import AssesmentDetails from './components/AssesmentDetails/AssesmentDetails'
import RightSidebar from './components/RightSidebar/RightSidebar'
import CandidateStatus from './components/CandidateStatus/CandidateStatus'
import PostedJobs from './components/PostedJobs/PostedJobs'
import InterviewInfo from './components/InterviewInfo/InterviewInfo'

const HomePage = () => {
  return (
    <div className='bg-[#F9F9F9] h-[2500px] overflow-y-auto ml-[136px] p-10 scrollbar-hidden'>
       <Heading/>
       <div className='flex items-center justify-center gap-[38px] mt-[34px] mb-[37px]'>
           <Graph/>
           <AssesmentDetails/>
       </div>
      <div className='flex gap-[30px] scrol'>
         <div className='w-[950px] flex flex-col gap-[49px]'>
            <InterviewInfo/>
            <PostedJobs/>
            <CandidateStatus/>
         </div>
         <RightSidebar/>
      </div>
    </div>
  )
}

export default HomePage