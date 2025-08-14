"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Activity, Eye, MousePointer, LogIn, LogOut } from "lucide-react"

export function RealtimeActivityFeed() {
  const [activities, setActivities] = useState([
    { id: 1, user: "John Doe", action: "viewed", target: "/dashboard", time: "2 seconds ago", type: "view" },
    { id: 2, user: "Jane Smith", action: "clicked", target: "Sign Up Button", time: "5 seconds ago", type: "click" },
    { id: 3, user: "Mike Johnson", action: "logged in", target: "", time: "12 seconds ago", type: "login" },
    { id: 4, user: "Sarah Wilson", action: "viewed", target: "/products", time: "18 seconds ago", type: "view" },
    { id: 5, user: "Tom Brown", action: "logged out", target: "", time: "25 seconds ago", type: "logout" },
  ])

  const getIcon = (type: string) => {
    switch (type) {
      case "view":
        return <Eye className="h-4 w-4" />
      case "click":
        return <MousePointer className="h-4 w-4" />
      case "login":
        return <LogIn className="h-4 w-4" />
      case "logout":
        return <LogOut className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "view":
        return "secondary"
      case "click":
        return "default"
      case "login":
        return "secondary"
      case "logout":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Real-time Activity Feed
        </CardTitle>
        <CardDescription>Live user activities as they happen</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg border">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {activity.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{activity.user}</span>
                    <Badge variant={getBadgeVariant(activity.type)} className="text-xs">
                      {getIcon(activity.type)}
                      <span className="ml-1">{activity.action}</span>
                    </Badge>
                  </div>
                  {activity.target && <p className="text-xs text-muted-foreground">{activity.target}</p>}
                </div>
                <div className="text-xs text-muted-foreground">{activity.time}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
