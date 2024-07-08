import { JobDetails } from '@/app/constants'
import { MoveUp } from 'lucide-react'
import Image from 'next/image'
import React, { FC } from 'react'

interface JobInfoCardProps{
  jobInfo:JobDetails
}

const JobInfoCard:FC<JobInfoCardProps>= ({jobInfo}) => {
  return (
    <div className='h-[250px] shadow-navbar w-[230px] rounded-[3px] flex flex-col'>
         <div className='p-2 flex items-center justify-center pb-[10px] border-b-[1px] gap-[4px] border-[#D6D6D6]'>
           <Image src={jobInfo.imgUrl} height={20} width={20} alt='job icon'/>
           <h1 className='text-[12px] font-normal leading-[22px] text-[#091316]'>{jobInfo.jobRole}</h1>
           <h1 className='text-[12px] font-normal leading-[21px] text-[#091316]'>#{jobInfo.jobIdNo}</h1>
         </div>
         <div className='flex flex-col items-center justify-center gap-[14px] mb-[16px] border-b-[1px] '>
            <h1 className='text-[12px] font-normal leading-[21px] text-[#091316] mt-2 text-center'>
              {jobInfo.jobPosition}
            </h1>
            <div className='h-[70px] w-[80px] rounded-[3px] bg-[#D9E4EF] py-[16px] px-[20px]'>
               <h1 className='text-[24px] font-normal leading-[38px] text-[#0A66C2]'>
                {jobInfo.noOfApplicants}
               </h1>
            </div>
             <h1 className='text-[12px] font-normal leading-[21px] text-[#091316] text-center mb-2'>
              Total Applicants
             </h1>
         </div>
         <div className='mx-[8px] mt-[6px] mb-[10px] flex items-center gap-[10px]'>
             <div className='flex items-center justify-center'>
               <MoveUp className='h-[14px] w-[12px] text-[#0A66C2]'/>
               <h1 className='text-[10px] font-normal leading-[18px]'>
                 <span className=' text-[#0A66C2]'>28%</span>vs Last month
               </h1>
             </div>
             <h1 className='text-[10px] font-normal leading-[18px] text-[#091316] '>
              {jobInfo.lastUpdated}
             </h1>
         </div>
    </div>
  )
}

export default JobInfoCard