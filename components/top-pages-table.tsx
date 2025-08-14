import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

export function TopPagesTable() {
  const pages = [
    { path: "/dashboard", views: 15420, uniqueUsers: 8230, avgTime: "3m 45s", bounceRate: 25.4, trend: "up" },
    { path: "/products", views: 12850, uniqueUsers: 7100, avgTime: "2m 18s", bounceRate: 42.1, trend: "up" },
    { path: "/pricing", views: 9640, uniqueUsers: 5890, avgTime: "1m 52s", bounceRate: 38.7, trend: "down" },
    { path: "/about", views: 7230, uniqueUsers: 4560, avgTime: "2m 05s", bounceRate: 45.2, trend: "up" },
    { path: "/contact", views: 5180, uniqueUsers: 3420, avgTime: "1m 28s", bounceRate: 52.8, trend: "down" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Pages</CardTitle>
        <CardDescription>Most visited pages and their performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Unique Users</TableHead>
              <TableHead className="text-right">Avg. Time</TableHead>
              <TableHead className="text-right">Bounce Rate</TableHead>
              <TableHead className="text-right">Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{page.path}</TableCell>
                <TableCell className="text-right">{page.views.toLocaleString()}</TableCell>
                <TableCell className="text-right">{page.uniqueUsers.toLocaleString()}</TableCell>
                <TableCell className="text-right">{page.avgTime}</TableCell>
                <TableCell className="text-right">{page.bounceRate}%</TableCell>
                <TableCell className="text-right">
                  {page.trend === "up" ? (
                    <Badge variant="secondary" className="text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Up
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="text-red-600">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      Down
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
