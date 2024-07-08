import React from 'react'
import TableHeader from '../shared/TableHeader'
import { CandidateStatusTable } from '../CandidateStatusTable/CandidateStatusTable'

const CandidateStatus = () => {
  return (
    <div className="h-[610px] w-[950px] bg-white">
      <TableHeader title='Candidate Status'/>
      <CandidateStatusTable/>
    </div>
  )
}

export default CandidateStatus