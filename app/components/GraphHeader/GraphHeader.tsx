import React from 'react'
import { GraphSelect } from '../GraphSelect/GraphSelect'

const GraphHeader = () => {
  return (
    <div className='flex items-center justify-between'>
         <div className='flex items-center justify-between gap-[20px]'>
            <h1 className='text-[22px] leading-[33px] text-[#000000]'>
              Application’s Info
            </h1>
            <div className='flex items-center justify-center gap-[10px]'>
              <div className='h-5 w-5 rounded-[3px] bg-[#277ACC]'>

              </div>
              <h1 className='text-[14px] leading-[21px] font-normal text-[#000]'>
                Recieved
              </h1>
            </div>
            <div className='flex items-center justify-center gap-[10px]'>
              <div className='h-5 w-5 rounded-[3px] bg-[#002B55BD]'>

              </div>
              <h1 className='text-[14px] leading-[21px] font-normal text-[#000]'>
                Processed
              </h1>
            </div> 
         </div>
        <GraphSelect/>
    </div> 
  )
}

export default GraphHeader