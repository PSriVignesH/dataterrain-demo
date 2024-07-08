"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", applications: 186, applications2: 20 },
  { month: "February", applications: 305, applications2: 40 },
  { month: "March", applications: 237, applications2: 80 },
  { month: "April", applications: 73, applications2: 90 },
  { month: "May", applications: 209, applications2: 120 },
  { month: "June", applications: 214, applications2: 130 },
  { month: "July", applications: 214, applications2: 150 },
  { month: "August", applications: 214, applications2: 160 },
  { month: "September", applications: 214, applications2: 170 },
  { month: "October", applications: 214, applications2: 120 },
  { month: "November", applications: 214, applications2: 80 },
  { month: "December", applications: 214, applications2: 60 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function GraphChart() {
  return (
    <Card className="h-[380px] mt-[20px] relative">
      <CardContent className="absolute top-0 left-0 w-full h-full">
        <ChartContainer config={chartConfig}>
          <LineChart data={chartData} width={600} height={190}>
            <CartesianGrid vertical={false}/>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              type="natural"
              dataKey="applications2"
              stroke="#002B55BD"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardContent className="w-full h-full">
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData} width={600} height={190}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="applications" fill="#277ACC" radius={2} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
