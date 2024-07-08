import React from 'react'
import GraphHeader from '../GraphHeader/GraphHeader'
import { GraphChart } from '../GraphChart/GraphChart'

const Graph = () => {
  return (
    <div className='p-4 rounded-[10px] bg-[#FFFFFF] h-[460px] w-[968px] shadow-navbar'>
         <GraphHeader/>
         <GraphChart/>
    </div>
  )
}

export default Graph