import React from 'react'
import SidebarHeader from '../SidebarHeader/SidebarHeader'
import { hiringCandidatesList } from '@/app/constants'
import HiringCandidatesList from '../HiringCandidatesList/HiringCandidatesList'

const HiringCandidates = () => {
  return (
    <div className='w-[340px] h-[560px]'>
       <SidebarHeader  title='Hiring Candidates'/>
       <div className='mt-[50px]'>
          {
            hiringCandidatesList.map((hiringCandidate,i)=>(
              <HiringCandidatesList hiringCandidates={hiringCandidate} key={i} />
            ))
          }
       </div>
    </div>
  )
}

export default HiringCandidates