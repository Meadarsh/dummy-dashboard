import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Activity, TrendingUp, Clock, Eye, MousePointer } from "lucide-react"

interface StatsCardsProps {
  dateRange: string
}

export function StatsCards({ dateRange }: StatsCardsProps) {
  const stats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12.5%",
      icon: Users,
      description: "Active users in selected period",
    },
    {
      title: "Sessions",
      value: "45,231",
      change: "+8.2%",
      icon: Activity,
      description: "Total user sessions",
    },
    {
      title: "Page Views",
      value: "189,432",
      change: "+15.3%",
      icon: Eye,
      description: "Total page views",
    },
    {
      title: "Avg. Session Duration",
      value: "4m 32s",
      change: "+2.1%",
      icon: Clock,
      description: "Average time per session",
    },
    {
      title: "Bounce Rate",
      value: "32.4%",
      change: "-5.2%",
      icon: TrendingUp,
      description: "Users who left after one page",
    },
    {
      title: "Click-through Rate",
      value: "6.8%",
      change: "+1.4%",
      icon: MousePointer,
      description: "Average CTR across all elements",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        const isPositive = stat.change.startsWith("+")
        const isNegative = stat.change.startsWith("-")

        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2">
                <span
                  className={`text-xs ${
                    isPositive ? "text-green-600" : isNegative ? "text-red-600" : "text-muted-foreground"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-xs text-muted-foreground">vs last period</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
