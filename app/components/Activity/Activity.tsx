import React from 'react'
import SidebarHeader from '../SidebarHeader/SidebarHeader'
import { activityList } from '@/app/constants'
import ActivityList from '../ActivityList/ActivityList'

const Activity = () => {
  return (
    <div className='w-[340px] h-[420px}'>
      <SidebarHeader title='Activity'/>
      <div className='mt-[50px]'>
           {
            activityList.map((activity,i)=>(
              <ActivityList activity={activity} key={i}/>
            ))
           }
      </div> 
    </div>
  )
}

export default Activity