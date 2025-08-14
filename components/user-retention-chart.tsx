"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function UserRetentionChart() {
  const data = [
    { day: "Day 1", retention: 100 },
    { day: "Day 2", retention: 85 },
    { day: "Day 3", retention: 72 },
    { day: "Day 7", retention: 58 },
    { day: "Day 14", retention: 45 },
    { day: "Day 30", retention: 32 },
    { day: "Day 60", retention: 28 },
    { day: "Day 90", retention: 25 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Retention</CardTitle>
        <CardDescription>Percentage of users returning over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[0, 100]} />
              <Tooltip formatter={(value) => [`${value}%`, "Retention Rate"]} />
              <Line
                type="monotone"
                dataKey="retention"
                stroke="hsl(var(--chart-1))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
