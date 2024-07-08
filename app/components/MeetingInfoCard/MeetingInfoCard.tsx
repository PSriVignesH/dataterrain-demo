import { InterviewDetails } from '@/app/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';
import { CalendarDays, Clock } from 'lucide-react';
import Image from 'next/image';
import React, { FC } from 'react'



interface MeetingInfoCardProps{
  interviewDetail:InterviewDetails
}

const MeetingInfoCard:FC<MeetingInfoCardProps>= ({interviewDetail}) => {  
  return (
    <div className='w-[700px]  rounded-[4px] h-[310px] border-[1px] border-[#D6D6D6] ml-[38px] flex-shrink-0 last:mr-[38px] mb-[30px]'>
      <div className='flex w-full'>
        <div className='flex  flex-col flex-grow-[3] border-r-[1px] border-[#D6D6D6] '>
       <div className='flex flex-col items-center justify-center  p-4 gap-4 border-b-[1px] border-[#D6D6D6]'>
         <div className="w-[104px] h-[104px] rounded-full border-[1px] border-[#0A66C2] overflow-hidden">
              <Image 
                src={interviewDetail.imgUrl} 
                height={104} 
                width={104} 
                alt='candidate image' 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
          </div>
          <h1 className='text-[16px] font-normal leading-[24px] text-[#091316]'>
            {interviewDetail.name}
          </h1>
          <h1 className='text-[16px] font-normal leading-[21px] text-[#091316]'>
            {interviewDetail.role}
          </h1>
          </div>
          <div className="flex items-center justify-evenly gap-[20px] pt-4 p-2 line-clamp-1">
  <div className="flex flex-col items-center justify-center gap-[10px]">
    <CalendarDays className="h-[25px] w-[25px] text-[#0A66C2]" />
    <h1 className="text-[14px] font-normal leading-[21px] text-[#0A66C2]">
      {interviewDetail.date}
    </h1>
  </div>
  <div className="w-[1px] h-[60px] bg-[#d6d6d6] mx-[10px]"></div> 
  <div className="flex flex-col items-center justify-center gap-[10px]">
    <Clock className="h-[25px] w-[25px] text-[#0A66C2]" />
    <h1 className="text-[14px] font-normal leading-[21px] text-[#0A66C2]">
      {interviewDetail.time}
    </h1>
  </div>
</div>
</div>
        <div className='flex-grow-[7]'>
           <div className='flex flex-col py-8 items-center justify-between  border-[#d6d6d6]'>
               <div className='flex-grow-[7] border-b-[1px]'>
                    <div className='flex items-center justify-center px-[55px] gap-10'>
                        <div className='flex flex-col items-center justify-center border-r-[1px] border-[#d6d6d6] pr-4 '>
                            <h1 className='text-[14px] font-normal leading-[21px] text-black my-[10px] text-center '>
                            1st Level : <span className='pl-[10px]'>{interviewDetail.firstLevelMarks}</span>
                            </h1>
                            <h1 className='text-[14px] font-normal leading-[21px] text-black my-[10px] text-center'>
                            2nd Level : <span className='pl-[10px]'>{interviewDetail.secondLevelMarks}</span>
                            </h1>
                            <h1 className='text-[14px] font-normal leading-[21px] my-[10px] text-black text-center'>
                              3rd Level : <span className='pl-[10px]'>{interviewDetail.thirdLevelMarks}</span>
                            </h1>
                            <h1 className='text-[14px] font-normal leading-[21px] my-[10px] text-black text-center'>
                            Meet Via : <span className='pl-[10px]'>{interviewDetail.meetVia}</span>
                            </h1>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-[14px] font-normal leading-[21px] text-black my-[10px] text-center'>
                              Interviewer : <span className='pl-[10px]'>{interviewDetail.interviewer1}</span>
                            </h1>
                            <h1 className='text-[14px] font-normal leading-[21px] text-black my-[10px] text-center'>
                            Interviewer : <span className='pl-[10px]'>{interviewDetail.interviewer2}</span>
                            </h1>
                            <h1 className='text-[14px] font-normal leading-[21px] my-[10px] text-black text-center'>
                            Interviewer : <span className='pl-[10px] text-[#0A66C2]'>{interviewDetail.interviewer3}</span>
                            </h1>
                            <h1 className='text-[14px] font-normal leading-[21px] my-[10px] text-black text-center'>
                            Attendees: <span className='pl-[10px]'>{interviewDetail.Attendees}</span>
                            </h1>
                        </div>
                    </div>
               </div>
               <div className='flex-grow-3 px-[40px] py-[20px]'>
                   <div className='flex items-center justify-center gap-[20px]'>
                        <Button className='py-[8px] px-[20px] bg-transparent border-[1px] border-[#0A66C2] rounded-[3px] text-[12px] font-medium leading-[21px] text-[#0A66C2] hover:bg-transparent hover:text-[#0A66C2] w-[130px] '>
                          Reschedule Meeting
                        </Button>
                        <Button className='py-[8px] px-[10px] bg-[#0A66C2] border-[1px] border-[#0A66C2] rounded-[3px] text-[12px] font-medium leading-[21px] text-white  hover:text-white
                           w-[130px] hover:bg-[#0A66C2]'>
                          Join Meeting
                        </Button>
                   </div>
               </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingInfoCard