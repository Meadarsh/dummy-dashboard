"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Monitor, Smartphone, Tablet } from "lucide-react"

export function DeviceAnalytics() {
  const data = [
    { device: "Desktop", users: 5200, sessions: 7800, icon: Monitor },
    { device: "Mobile", users: 6800, sessions: 8900, icon: Smartphone },
    { device: "Tablet", users: 847, sessions: 1200, icon: Tablet },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Analytics</CardTitle>
        <CardDescription>User activity by device type</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="device" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="hsl(var(--chart-1))" />
              <Bar dataKey="sessions" fill="hsl(var(--chart-2))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {data.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="text-center">
                <Icon className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <div className="text-sm font-medium">{item.device}</div>
                <div className="text-xs text-muted-foreground">{item.users.toLocaleString()} users</div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
