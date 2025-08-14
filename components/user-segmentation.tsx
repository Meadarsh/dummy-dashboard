"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Users } from "lucide-react"

export function UserSegmentation() {
  const data = [
    { segment: "New Users", count: 3420, percentage: 27 },
    { segment: "Returning Users", count: 5680, percentage: 45 },
    { segment: "Power Users", count: 2100, percentage: 17 },
    { segment: "Inactive Users", count: 1400, percentage: 11 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          User Segmentation
        </CardTitle>
        <CardDescription>User categories based on activity patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="segment" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="count" fill="hsl(var(--chart-1))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
