import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MapPin } from "lucide-react"

export function GeographicDistribution() {
  const countries = [
    { name: "United States", users: 4250, percentage: 33 },
    { name: "United Kingdom", users: 2100, percentage: 16 },
    { name: "Germany", users: 1800, percentage: 14 },
    { name: "France", users: 1500, percentage: 12 },
    { name: "Canada", users: 1200, percentage: 9 },
    { name: "Others", users: 2097, percentage: 16 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Geographic Distribution
        </CardTitle>
        <CardDescription>User distribution by country</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {countries.map((country, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{country.name}</span>
              <span className="text-muted-foreground">{country.users.toLocaleString()} users</span>
            </div>
            <Progress value={country.percentage} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
