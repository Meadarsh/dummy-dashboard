import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export function ActivityTimeline() {
  const events = [
    { time: "2 hours ago", event: "Peak traffic reached", type: "milestone", description: "15,000 concurrent users" },
    { time: "4 hours ago", event: "New feature deployed", type: "deployment", description: "User dashboard v2.1" },
    { time: "6 hours ago", event: "High engagement detected", type: "alert", description: "Product page CTR +25%" },
    {
      time: "8 hours ago",
      event: "System maintenance",
      type: "maintenance",
      description: "Database optimization completed",
    },
    { time: "12 hours ago", event: "Traffic spike", type: "milestone", description: "Social media campaign impact" },
    { time: "1 day ago", event: "User milestone", type: "milestone", description: "10,000th user registered" },
  ]

  const getEventColor = (type: string) => {
    switch (type) {
      case "milestone":
        return "bg-green-100 text-green-800"
      case "deployment":
        return "bg-blue-100 text-blue-800"
      case "alert":
        return "bg-yellow-100 text-yellow-800"
      case "maintenance":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Activity Timeline
        </CardTitle>
        <CardDescription>Recent system and user activity events</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64">
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="flex items-start space-x-4 pb-4 border-b last:border-b-0">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">{event.event}</h4>
                    <Badge variant="outline" className={getEventColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{event.description}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
