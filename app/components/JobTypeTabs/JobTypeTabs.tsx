import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { activeJobs, completedJobs, inactiveJobs } from '@/app/constants'
import JobInfoCard from '../JobInfocard/JobInfoCard'

const JobTypeTabs = () => {
  return (
    <div className='mx-[20px]'>
      <Tabs defaultValue="activeJobs" className="w-[895px]">
      <TabsList className="grid w-full bg-transparent  gap-[38px] grid-cols-3">
        <TabsTrigger className='data-[state=active]:bg-[#DBEAF3]  data-[state=active]:text-#3E3E3E' value="activeJobs">
          Active Jobs
        </TabsTrigger>
        <TabsTrigger className='data-[state=active]:bg-[#DBEAF3]  data-[state=active]:text-#3E3E3E' value="inActiveJobs">
          InActive Jobs
        </TabsTrigger>
        <TabsTrigger className='data-[state=active]:bg-[#DBEAF3]  data-[state=active]:text-#3E3E3E' value="completedJobs">
          Completed Jobs
        </TabsTrigger>
      </TabsList>
      <TabsContent value="activeJobs">
        <Card>
          <CardContent className="flex items-center p-[20px] py-[50px] gap-[26px]">
              {
                activeJobs.map((job)=>(
                  <JobInfoCard  jobInfo={job} key={job.jobIdNo}/>
                ))
              }
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="inActiveJobs">
      <Card>
          <CardContent className="flex items-center p-[20px] py-[50px] gap-[26px]">
              {
                inactiveJobs.map((job)=>(
                  <JobInfoCard  jobInfo={job} key={job.jobIdNo}/>
                ))
              }
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="completedJobs">
      <Card>
          <CardContent className="flex items-center p-[20px] py-[50px] gap-[26px]">
              {
                completedJobs.map((job)=>(
                  <JobInfoCard  jobInfo={job} key={job.jobIdNo}/>
                ))
              }
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default JobTypeTabs