"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

interface SearchAndFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function SearchAndFilters({ searchQuery, setSearchQuery }: SearchAndFiltersProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users, events, or pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all-users">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-users">All Users</SelectItem>
                <SelectItem value="new-users">New Users</SelectItem>
                <SelectItem value="returning-users">Returning Users</SelectItem>
                <SelectItem value="power-users">Power Users</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-events">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-events">All Events</SelectItem>
                <SelectItem value="page-views">Page Views</SelectItem>
                <SelectItem value="clicks">Clicks</SelectItem>
                <SelectItem value="logins">Logins</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
