import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const AssesmentDetails = () => {
  return (
    <div className='h-[460px] w-[711px] rounded-[10px] relative bg-gradient-to-r from-blue-600 to-blue-400 p-[49px]'>
         <Image src="/assets/illustrations/tiny-girl.png" className='absolute top-[28px] right-[180px] z-50 bg-transparent' width={132} height={165} alt='tiny girl'/>
         <Image src="/assets/illustrations/big-office-girl.png" className='absolute top-[-50px] right-0 z-50 bg-transparent' width={277} height={346} alt='big girl'/>
       <div className='flex flex-col items-start justify-between relative'>
          <div className='h-[125px] w-[125px] px-[33px] py-[22px] rounded-[3px] bg-[#fff]'> 
              <Image src="/assets/illustrations/assesment.png" height={79} width={58} alt='assesment icons'/>
          </div>
          <div className='w-[140px] h-[84px] bg-transparent mt-[39px] mb-[14px]'>
             <h1 className='font-semibold text-[#fff] text-[56px] leading-[84px] flex items-center justify-center'>
              0033
             </h1>
          </div>
          <div >
            <div className='flex items-center gap-[100px] justify-between'>
               <p className='font-medium text-[22px] leading-8 text-[#FFFFFF]'>
                New Assessment's
               </p>
               <Button className='w-[145px] h-[45px] rounded-[3px] px-[26px] py-3 bg-[#fff] text-[#000] hover:bg-white-200 transition '>
                 VIEW DETAILS
               </Button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default AssesmentDetails