
export interface Activity {
  imgUrl: string;
  candidateName: string;
  jobRole: string;
  interviewerName: string;
  activityTime: string;
}

export interface Hiring {
  imgUrl: string;
  candidateName: string;
  role: string;
  hiredBy: string;
}

export interface JobDetails {
  imgUrl: string;
  jobRole: string;
  jobIdNo: string;
  jobPosition: string;
  noOfApplicants: string;
  percentageIncrease: string;
  lastUpdated: string;
}
export interface Interview {
  interviewDate: string;
  interviewMonth: string;
  roleName: string;
  candidateName: string;
  interviewTime: string;
  backgroundColor: string;
  color: string;
}

export interface InterviewDetails {
  name: string;
  role: string;
  imgUrl: string;
  date: string;
  time: string;
  firstLevelMarks: string;
  secondLevelMarks: string;
  thirdLevelMarks: string;
  meetVia: string;
  interviewer1: string;
  interviewer2: string;
  interviewer3: string;
  Attendees: string;
}

export const NavbarMenuIcons =[
  {
    imgURL: "/assets/icons/theme.png",
  },
  {
    imgURL: "/assets/icons/fileupload.png",
  },
  {
    imgURL: "/assets/icons/chat.png",
  },
  {
    imgURL: "/assets/icons/notification.png",
  },
  {
    imgURL: "/assets/icons/settings.png",
  },
  {
    imgURL: "/assets/icons/user.png",
  },
]

export const SidebarMenuIcons = [
    {
      imgURL: "/assets/icons/options.png",
    },
    {
      imgURL: "/assets/icons/edit-settings.png",
    },
    {
      imgURL: "/assets/icons/cleared.png",
    },
    {
      imgURL: "/assets/icons/filter-search.png",
    },
    {
      imgURL: "/assets/icons/briefcase.png",
    },
    {
      imgURL: "/assets/icons/file.png",
    },
    {
      imgURL: "/assets/icons/support.png",
    },
    {
      imgURL: "/assets/icons/customer-care.png",
    },
    {
      imgURL: "/assets/icons/sort.png",
    },
]


export const IntervewDetails = [
  {
    name: "John Smith",
    role: "Senior Python Developer",
    imgUrl: "/assets/images/person-1.jpg",
    date: "19 Feb 2024",
    time: "10:30 AM",
    firstLevelMarks: "7/10",
    secondLevelMarks: "6/10",
    thirdLevelMarks: "waiting",
    meetVia: "G-Meet",
    interviewer1: "Stella",
    interviewer2: "Smith",
    interviewer3: "Stephan",
    Attendees: "Johnson"
  },
  {
    name: "Maria",
    role: "Senior Python Developer",
    imgUrl: "/assets/images/person-2.jpg",
    date: "19 Feb 2024",
    time: "10:30 AM",
    firstLevelMarks: "7/10",
    secondLevelMarks: "6/10",
    thirdLevelMarks: "waiting",
    meetVia: "G-Meet",
    interviewer1: "Stella",
    interviewer2: "Smith",
    interviewer3: "Stephan",
    Attendees: "Johnson"
  },
  {
    name: "Emily Brown",
    role: "Frontend Developer",
    imgUrl: "/assets/images/person-1.jpg",
    date: "21 Feb 2024",
    time: "11:00 AM",
    firstLevelMarks: "8/10",
    secondLevelMarks: "7/10",
    thirdLevelMarks: "7/10",
    meetVia: "Zoom",
    interviewer1: "David",
    interviewer2: "Sophia",
    interviewer3: "Rachel",
    Attendees: "Williams"
  },
  {
    name: "James Wilson",
    role: "Backend Developer",
    imgUrl: "/assets/images/person-1.jpg",
    date: "22 Feb 2024",
    time: "10:00 AM",
    firstLevelMarks: "9/10",
    secondLevelMarks: "8/10",
    thirdLevelMarks: "8/10",
    meetVia: "Teams",
    interviewer1: "Olivia",
    interviewer2: "Ethan",
    interviewer3: "Emma",
    Attendees: "Anderson"
  },
  {
    name: "Sophie Taylor",
    role: "UI/UX Designer",
    imgUrl: "/assets/images/person-1.jpg",
    date: "23 Feb 2024",
    time: "9:30 AM",
    firstLevelMarks: "7/10",
    secondLevelMarks: "6/10",
    thirdLevelMarks: "waiting",
    meetVia: "Skype",
    interviewer1: "Lucas",
    interviewer2: "Lily",
    interviewer3: "Logan",
    Attendees: "Thompson"
  },
  {
    name: "Michael Clark",
    role: "Data Analyst",
    imgUrl: "/assets/images/person-1.jpg",
    date: "24 Feb 2024",
    time: "10:30 AM",
    firstLevelMarks: "8/10",
    secondLevelMarks: "7/10",
    thirdLevelMarks: "7/10",
    meetVia: "Google",
    interviewer1: "Isabella",
    interviewer2: "Mia",
    interviewer3: "Mason",
    Attendees: "Parker"
  },
  {
    name: "Emma Garcia",
    role: "Product Manager",
    imgUrl: "/assets/images/person-1.jpg",
    date: "25 Feb 2024",
    time: "11:00 AM",
    firstLevelMarks: "9/10",
    secondLevelMarks: "8/10",
    thirdLevelMarks: "8/10",
    meetVia: "Zoom",
    interviewer1: "Alexander",
    interviewer2: "Sofia",
    interviewer3: "Jack",
    Attendees: "Wright"
  },
  {
    name: "Daniel Martinez",
    role: "Software Engineer",
    imgUrl: "/assets/images/person-1.jpg",
    date: "26 Feb 2024",
    time: "10:00 AM",
    firstLevelMarks: "7/10",
    secondLevelMarks: "6/10",
    thirdLevelMarks: "waiting",
    meetVia: "Teams",
    interviewer1: "Charlotte",
    interviewer2: "Ava",
    interviewer3: "Harper",
    Attendees: "Gonzalez"
  },
  {
    name: "Olivia Hernandez",
    role: "System Administrator",
    imgUrl: "/assets/images/person-2.jpg",
    date: "27 Feb 2024",
    time: "9:30 AM",
    firstLevelMarks: "8/10",
    secondLevelMarks: "7/10",
    thirdLevelMarks: "7/10",
    meetVia: "Skype",
    interviewer1: "Jackson",
    interviewer2: "Amelia",
    interviewer3: "Evelyn",
    Attendees: "Hernandez"
  },
  {
    name: "Ella Moore",
    role: "Data Scientist",
    imgUrl: "/assets/images/person-2.jpg",
    date: "28 Feb 2024",
    time: "10:30 AM",
    firstLevelMarks: "8/10",
    secondLevelMarks: "8/10",
    thirdLevelMarks: "waiting",
    meetVia: "Google",
    interviewer1: "Ethan",
    interviewer2: "Grace",
    interviewer3: "Sophie",
    Attendees: "Moore"
  }
];

export const activeJobs =[
  {
    imgUrl:"/assets/icons/ui-ux.png",
    jobRole:"UI-UX Designer",
    jobIdNo:"004",
    jobPosition:"Senior Developer",
    noOfApplicants:"258",
    percentageIncrease:"28%",
    lastUpdated:"6mins Ago"
  },
  {
    imgUrl:"/assets/icons/python.png",
    jobRole:"Python Developers",
    jobIdNo:"001",
    jobPosition:"Senior Developer",
    noOfApplicants:"258",
    percentageIncrease:"28%",
    lastUpdated:"6mins Ago"
  },
  {
    imgUrl:"/assets/icons/angular.png",
    jobRole:"Angular Developers",
    jobIdNo:"002",
    jobPosition:"Senior Developer",
    noOfApplicants:"258",
    percentageIncrease:"28%",
    lastUpdated:"6mins Ago"
  },
  {
    imgUrl:"/assets/icons/java.png",
    jobRole:"Java Developers",
    jobIdNo:"003",
    jobPosition:"Senior Developer",
    noOfApplicants:"258",
    percentageIncrease:"28%",
    lastUpdated:"6mins Ago"
  }
]


export const inactiveJobs = [
  {
    imgUrl: "/assets/icons/angular.png",
    jobRole: "Angular Developer",
    jobIdNo: "005",
    jobPosition: "Junior Developer",
    noOfApplicants: "150",
    percentageIncrease: "15%",
    lastUpdated: "10mins Ago",
  },
  {
    imgUrl: "/assets/icons/python.png",
    jobRole: "Python Developers",
    jobIdNo: "006",
    jobPosition: "Junior Developer",
    noOfApplicants: "120",
    percentageIncrease: "10%",
    lastUpdated: "12mins Ago",
  },
  {
    imgUrl: "/assets/icons/ui-ux.png",
    jobRole: "UI-UX Designer",
    jobIdNo: "008",
    jobPosition: "Junior Designer",
    noOfApplicants: "200",
    percentageIncrease: "20%",
    lastUpdated: "5mins Ago",
  },
  {
    imgUrl: "/assets/icons/java.png",
    jobRole: "Java Developers",
    jobIdNo: "007",
    jobPosition: "Junior Developer",
    noOfApplicants: "180",
    percentageIncrease: "18%",
    lastUpdated: "8mins Ago",
  },
];

export const completedJobs = [
  {
    imgUrl: "/assets/icons/java.png",
    jobRole: "Java Developers",
    jobIdNo: "009",
    jobPosition: "Senior Developer",
    noOfApplicants: "300",
    percentageIncrease: "30%",
    lastUpdated: "2mins Ago",
  },
  {
    imgUrl: "/assets/icons/ui-ux.png",
    jobRole: "UI-UX Designer",
    jobIdNo: "010",
    jobPosition: "Senior Designer",
    noOfApplicants: "270",
    percentageIncrease: "27%",
    lastUpdated: "4mins Ago",
  },
  {
    imgUrl: "/assets/icons/angular.png",
    jobRole: "Angular Developers",
    jobIdNo: "011",
    jobPosition: "Senior Developer",
    noOfApplicants: "290",
    percentageIncrease: "29%",
    lastUpdated: "1min Ago",
  },
  {
    imgUrl: "/assets/icons/python.png",
    jobRole: "Python Developers",
    jobIdNo: "012",
    jobPosition: "Senior Developer",
    noOfApplicants: "310",
    percentageIncrease: "31%",
    lastUpdated: "3mins Ago",
  },
];



export const candidateStatus = [
  {
    jobId: "001",
    name: "John",
    position: "Angular",
    firstLevelMarks: "6/10",
    secondLevelMarks: "7/10",
    thirdLevelMarks: "8/10",
    fourthLevelMarks: "notStarted",
    totalMarks: "pending",
    status: "active",
  },
  {
    jobId: "002",
    name: "Jane",
    position: "Python",
    firstLevelMarks: "8/10",
    secondLevelMarks: "6/10",
    thirdLevelMarks: "9/10",
    fourthLevelMarks: "8/10",
    totalMarks: "33/40",
    status: "hired",
  },
  {
    jobId: "003",
    name: "Alice ",
    position: "Java ",
    firstLevelMarks: "7/10",
    secondLevelMarks: "8/10",
    thirdLevelMarks: "8/10",
    fourthLevelMarks: "notStarted",
    totalMarks: "pending",
    status: "active",
  },
  {
    jobId: "004",
    name: "Bob ",
    position: "UI-UX ",
    firstLevelMarks: "5/10",
    secondLevelMarks: "7/10",
    thirdLevelMarks: "rejected",
    fourthLevelMarks: "rejected",
    totalMarks: "25/40",
    status: "reject",
  },
  {
    jobId: "005",
    name: "Charlie",
    position: "React",
    firstLevelMarks: "9/10",
    secondLevelMarks: "8/10",
    thirdLevelMarks: "9/10",
    fourthLevelMarks: "notStarted",
    totalMarks: "pending",
    status: "active",
  },
];

export const  upcomingInterviews =[
  {
    interviewDate:"07",
    interviewMonth:"Feb",
    roleName:"Designer",
    candidateName:"Stella",
    interviewTime:"10AM - 11AAM",
    backgroundColor:"#0B74AD26",
    color:"#0B74AD"
  },
  {
    interviewDate:"07",
    interviewMonth:"Feb",
    roleName:"PMO",
    candidateName:"Stella",
    interviewTime:"10AM - 11AAM",
    backgroundColor:"#0B74AD26",
    color:"#0B74AD"
  },
  {
    interviewDate:"08",
    interviewMonth:"Feb",
    roleName:"UI-UX",
    candidateName:"Stella",
    interviewTime:"11AM - 12AM",
    backgroundColor:"#0B74AD26",
    color:"#0B74AD"
  }

]


export const activityList = [
  {
    imgUrl:"/assets/icons/activity-1.png",
    candidateName:"Stella",
    jobRole:"Python Developer",
    interviewerName:"John",
    activityTime:"15 mins ago"
  },
  {
    imgUrl:"/assets/icons/activity-2.png",
    candidateName:"Amy",
    jobRole:"React Developer",
    interviewerName:"John",
    activityTime:"10 mins ago"
  },
  {
    imgUrl:"/assets/icons/activity-3.png",
    candidateName:"Grace",
    jobRole:"Java Developer",
    interviewerName:"Kals",
    activityTime:"12 mins ago"
  }
]


export const hiringCandidatesList =[
  {
    imgUrl:"/assets/images/hiring-1.png",
     candidateName:"John",
     role:"Python Developer",
     hiredBy:"Kevin"
  },
  {
    imgUrl:"/assets/images/hiring-3.png",
     candidateName:"Taylor",
     role:"Angular Developer",
     hiredBy:"Amy"
  },
  {
    imgUrl:"/assets/images/hiring-4.png",
     candidateName:"Sri",
     role:"React Developer",
     hiredBy:"Amila"
  },
  {
    imgUrl:"/assets/images/hiring-5.png",
     candidateName:"Jack",
     role:"Java Developer",
     hiredBy:"Justin"
  }
]