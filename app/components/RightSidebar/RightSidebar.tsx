import React from 'react'
import Calendar from '../Calendar/Calendar'
import UpcomingInterviews from '../UpcomingInterviews/UpcomingInterviews'
import Activity from '../Activity/Activity'
import HiringCandidates from '../HiringCandidates/HiringCandidates'


const RightSidebar = () => {
  return (
    <div className="h-[1832px] w-[319px] bg-transparent flex flex-col items-center justify-between gap-[20px]">
      <Calendar />
      <UpcomingInterviews/>
      <Activity/>
      <HiringCandidates/>
    </div>
  )
}

export default RightSidebar