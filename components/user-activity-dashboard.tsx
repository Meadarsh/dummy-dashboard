"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download } from "lucide-react"
import { StatsCards } from "@/components/stats-cards"
import { ActivityChart } from "@/components/activity-chart"
import { UserEngagementChart } from "@/components/user-engagement-chart"
import { GeographicDistribution } from "@/components/geographic-distribution"
import { DeviceAnalytics } from "@/components/device-analytics"
import { TopPagesTable } from "@/components/top-pages-table"
import { RealtimeActivityFeed } from "@/components/realtime-activity-feed"
import { UserRetentionChart } from "@/components/user-retention-chart"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { UserSegmentation } from "@/components/user-segmentation"
import { ActivityTimeline } from "@/components/activity-timeline"
import { SearchAndFilters } from "@/components/search-and-filters"

export function UserActivityDashboard() {
  const [dateRange, setDateRange] = useState("7d")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">User Activity Dashboard</h1>
              <p className="text-muted-foreground">Track and analyze user behavior across your platform</p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1d">Last 24h</SelectItem>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 space-y-6">
        {/* Element 1: Search and Filters */}
        <SearchAndFilters searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Element 2: Overview Stats Cards */}
        <StatsCards dateRange={dateRange} />

        {/* Element 3: Activity Chart */}
        <ActivityChart dateRange={dateRange} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Element 4: User Engagement Chart */}
          <UserEngagementChart />

          {/* Element 5: Geographic Distribution */}
          <GeographicDistribution />
        </div>

        <Tabs defaultValue="analytics" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="realtime">Real-time</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Element 6: Device Analytics */}
              <DeviceAnalytics />

              {/* Element 7: User Retention Chart */}
              <UserRetentionChart />
            </div>

            {/* Element 8: Top Pages Table */}
            <TopPagesTable />
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Element 9: User Segmentation */}
              <UserSegmentation />

              {/* Element 10: Activity Timeline */}
              <ActivityTimeline />
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            {/* Element 11: Performance Metrics */}
            <PerformanceMetrics />
          </TabsContent>

          <TabsContent value="realtime" className="space-y-6">
            {/* Element 12: Real-time Activity Feed */}
            <RealtimeActivityFeed />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
