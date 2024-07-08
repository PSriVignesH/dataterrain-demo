import { candidateStatus } from "@/app/constants"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Ellipsis, Eye } from "lucide-react"
import Image from "next/image"



export function CandidateStatusTable() {
  return (
    <Table className="w-[850px] h-[500px] mx-auto">
      <TableHeader className="bg-[#F5F5F5] border-b-[2px] border-[#000000]">
        <TableRow>
          <TableHead>Job ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Level 1</TableHead>
          <TableHead>Level 2</TableHead>
          <TableHead>Level 3</TableHead>
          <TableHead>Level 4</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {candidateStatus.map((candidate) => (
          <TableRow key={candidate.jobId}>
            <TableCell className="font-medium">{candidate.jobId}</TableCell>
            <TableCell>{candidate.name}</TableCell>
            <TableCell>{candidate.position}</TableCell>
            <TableCell>{candidate.firstLevelMarks}</TableCell>
            <TableCell>{candidate.secondLevelMarks}</TableCell>
            <TableCell>
               {
                candidate.thirdLevelMarks !== "rejected" && candidate.thirdLevelMarks !== "notStarted" && (
                  <>
                  {candidate.thirdLevelMarks}
                  </>
                )
               }
               {
                  candidate.thirdLevelMarks === "rejected" && (
                    <>
                    <Image  src="/assets/icons/rejected.png" height={25} width={25} alt="rejected"/>
                    </>
                  )
               }
               {
                  candidate.thirdLevelMarks === "notStarted" && (
                    <>
                    <Ellipsis className="h-[4px] w-[22px]"/>
                    </>
                  )
               }
            </TableCell>
            <TableCell>
                 {
                  candidate.fourthLevelMarks !== "rejected" && candidate.fourthLevelMarks !== "notStarted" && (
                    <>{candidate.fourthLevelMarks}</>
                  )
                 }
                {candidate.fourthLevelMarks === "rejected" && (
                  <Image src="/assets/icons/rejected.png" height={52} width={25} alt="rejected" />
                )}
                {candidate.fourthLevelMarks === "notStarted" && (
                  <Ellipsis className="h-[25px] w-[22px]" />
                )}
            </TableCell>
            <TableCell>
              {
                candidate.totalMarks !== "pending" && (
                  <>
                    {candidate.totalMarks}
                  </>
                )
              }
              {
                candidate.totalMarks === "pending" && (
                  <>
                    <Ellipsis className="h-[25px] w-[22px]" />
                  </>
                )
              }
             </TableCell>
            <TableCell>
              {
                candidate.status === "hired" && (
                  <div className="w-[70px] h-[25px] rounded-[2px] bg-[#0EAD0B26] flex items-center justify-center">
                     <h1 className="text-[#108F0E] text-[14px] font-normal leading-5 text-center">Hired</h1>
                  </div>
                )
              }
              {
                candidate.status === "active" && (
                  <div className="w-[70px] h-[25px] rounded-[2px] bg-[#FFF9EC]  flex items-center justify-center">
                     <h1 className="text-[#F5C961] text-[14px] font-normal leading-5 text-center">Active</h1>
                  </div>
                )
              }
              {
                candidate.status === "reject" && (
                  <div className="w-[70px] h-[25px] rounded-[2px] bg-[#E73B3B26] flex items-center justify-center">
                     <h1 className="text-[#D12323] text-[14px] font-normal leading-5  text-center">Reject</h1>
                  </div>
                )
              }
            </TableCell>
            <TableCell><Eye className="w-[22px] h-[11px]"/></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
