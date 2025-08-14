"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

export function UserEngagementChart() {
  const data = [
    { name: "Highly Engaged", value: 35, color: "hsl(var(--chart-1))" },
    { name: "Moderately Engaged", value: 45, color: "hsl(var(--chart-2))" },
    { name: "Low Engagement", value: 20, color: "hsl(var(--chart-3))" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Engagement Levels</CardTitle>
        <CardDescription>Distribution of user engagement scores</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
