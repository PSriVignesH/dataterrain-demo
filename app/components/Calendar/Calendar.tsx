"use client"
import React, { FC, useState } from 'react'
import { DateRange, Range, RangeKeyDict } from 'react-date-range'

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"



const initialDateRange ={
  startDate:new Date(),
  endDate:new Date(),
  key:"selection"
}

const Calendar= () => {
  const [dateRange, setDateRange] = useState<Range>(initialDateRange)
    
  const  onChangeDate=(value: React.SetStateAction<Range>)=>{
   setDateRange(value)
  }
  return (
    <DateRange rangeColors={["#0A66C2"]} ranges={[dateRange]} date={new Date()} onChange={(value:any)=>{onChangeDate(value.selection)}} direction='vertical' showDateDisplay={false} minDate={new Date()} className='w-[340px] h-[260px] bg-white  rounded-[3px] shadow-navbar'/>
  )
}

export default Calendar