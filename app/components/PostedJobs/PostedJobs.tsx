import { Input } from '@/components/ui/input'
import { Search,ListFilter } from 'lucide-react'
import React from 'react'
import TableHeader from '../shared/TableHeader'
import JobTypeTabs from '../JobTypeTabs/JobTypeTabs'

const PostedJobs = () => {
  return (
    <div className="h-[561px] w-[950px] bg-white shadow-navbar rounded-[5px]">
      <TableHeader title="Posted Jobs"/>
      <JobTypeTabs/>
    </div>
  )
}

export default PostedJobs