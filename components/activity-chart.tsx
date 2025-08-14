"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"

interface ActivityChartProps {
  dateRange: string
}

export function ActivityChart({ dateRange }: ActivityChartProps) {
  console.log(dateRange)
  const data = [
    { time: "00:00", users: 1200, sessions: 1800, pageViews: 4200 },
    { time: "04:00", users: 800, sessions: 1200, pageViews: 2800 },
    { time: "08:00", users: 2400, sessions: 3600, pageViews: 8400 },
    { time: "12:00", users: 3200, sessions: 4800, pageViews: 11200 },
    { time: "16:00", users: 2800, sessions: 4200, pageViews: 9800 },
    { time: "20:00", users: 2000, sessions: 3000, pageViews: 7000 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Activity Over Time</CardTitle>
        <CardDescription>Real-time user engagement metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="pageViews"
                stackId="1"
                stroke="hsl(var(--chart-1))"
                fill="hsl(var(--chart-1))"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="sessions"
                stackId="1"
                stroke="hsl(var(--chart-2))"
                fill="hsl(var(--chart-2))"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="users"
                stackId="1"
                stroke="hsl(var(--chart-3))"
                fill="hsl(var(--chart-3))"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
