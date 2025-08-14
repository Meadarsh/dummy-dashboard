import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Zap, Clock, Server, Wifi } from "lucide-react"

export function PerformanceMetrics() {
  const metrics = [
    {
      name: "Page Load Time",
      value: "1.2s",
      score: 92,
      status: "excellent",
      icon: Clock,
      description: "Average time to load pages",
    },
    {
      name: "Server Response Time",
      value: "180ms",
      score: 88,
      status: "good",
      icon: Server,
      description: "Average server response time",
    },
    {
      name: "Core Web Vitals",
      value: "95/100",
      score: 95,
      status: "excellent",
      icon: Zap,
      description: "Overall performance score",
    },
    {
      name: "Network Latency",
      value: "45ms",
      score: 85,
      status: "good",
      icon: Wifi,
      description: "Average network latency",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-600"
      case "good":
        return "text-blue-600"
      case "fair":
        return "text-yellow-600"
      case "poor":
        return "text-red-600"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.name}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center justify-between mt-2">
                <Progress value={metric.score} className="flex-1 mr-2" />
                <Badge variant="outline" className={getStatusColor(metric.status)}>
                  {metric.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{metric.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
