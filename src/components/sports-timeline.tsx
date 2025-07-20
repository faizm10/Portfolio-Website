import { Timeline } from "@/components/ui/timeline"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Medal, Star, UserRound } from "lucide-react"

export default function SportsTimeline() {
  const sportsData = [
    {
      title: "Grade 6",
      content: (
        <Card className="border-l-4 border-l-orange-400">
          <CardContent className="p-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Middle School</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <UserRound className="h-3.5 w-3.5 text-green-500" />
                <span>Varsity Soccer Team</span>
              </li>
              <li className="flex items-center gap-1.5">
                <UserRound className="h-3.5 w-3.5 text-green-500" />
                <span>Cross Country Team - Top 125</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Grade 7",
      content: (
        <Card className="border-l-4 border-l-orange-400">
          <CardContent className="p-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Middle School</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <UserRound className="h-3.5 w-3.5 text-green-500" />
                <span>Varsity Soccer Team</span>
              </li>
              <li className="flex items-center gap-1.5">
                <UserRound className="h-3.5 w-3.5 text-green-500" />
                <span>Track And Field - 800m</span>
              </li>
              <li className="flex items-center gap-1.5">
                <UserRound className="h-3.5 w-3.5 text-green-500" />
                <span>Cross Country Team - Top 75</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Grade 8",
      content: (
        <Card className="border-l-4 border-l-orange-400">
          <CardContent className="p-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Middle School</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <UserRound className="h-3.5 w-3.5 text-green-500" />
                <span>Varsity Soccer Team</span>
              </li>
              <li className="flex items-center gap-1.5">
                <UserRound className="h-3.5 w-3.5 text-green-500" />
                <span>Track And Field - 1500m</span>
              </li>
              <li className="flex items-center gap-1.5">
                <UserRound className="h-3.5 w-3.5 text-green-500" />
                <span>Cross Country Team - Top 25</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Grade 11",
      content: (
        <Card className="border-l-4 border-l-orange-400">
          <CardContent className="p-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">High School</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <Trophy className="h-3.5 w-3.5 text-amber-500" />
                <span>Varsity Soccer Team - 1st Place ROPSSA</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Grade 12",
      content: (
        <Card className="border-l-4 border-l-orange-400">
          <CardContent className="p-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">High School</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <UserRound className="h-3.5 w-3.5 text-green-500" />
                <span>Varsity Soccer Team</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-blue-500" />
                <span>Varsity Badminton Team - QF</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Winter 2024",
      content: (
        <Card className="border-l-4 border-l-orange-400">
          <CardContent className="p-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">University of Guelph</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-blue-500" />
                <span>Competitive Soccer 5v5 - Rd of 16</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-blue-500" />
                <span>Competitive Soccer 5v5 - QF</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-blue-500" />
                <span>Competitive Basketball 5v5 - Rd of 16</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-blue-500" />
                <span>Competitive Ping Pong - QF</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Fall 2024",
      content: (
        <Card className="border-l-4 border-l-orange-400">
          <CardContent className="p-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">University of Guelph</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <Medal className="h-3.5 w-3.5 text-amber-500" />
                <span>Competitive Soccer 9v9 - 3rd</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Medal className="h-3.5 w-3.5 text-amber-500" />
                <span>Recreational Soccer 9v9 - 2nd</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-blue-500" />
                <span>Competitive Badminton - Rd of 16</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-blue-500" />
                <span>Competitive Basketball - QF</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-blue-500" />
                <span>Competitive Ping Pong - QF</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Winter 2025",
      content: (
        <Card className="border-l-4 border-l-orange-400">
          <CardContent className="p-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">University of Guelph</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <Medal className="h-3.5 w-3.5 text-amber-500" />
                <span>Competitive Soccer 5v5 - 3rd</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-blue-500" />
                <span>Recreational Soccer 5v5 - QF</span>
              </li>
              <li className="flex items-center gap-1.5">
                <UserRound className="h-3.5 w-3.5 text-green-500" />
                <span>Open Fun Soccer 5v5 - 5th</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-blue-500" />
                <span>Competitive Badminton - QF</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Summer 2025",
      content: (
        <Card className="border-l-4 border-l-orange-400">
          <CardContent className="p-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">University of Waterloo</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <Medal className="h-3.5 w-3.5 text-amber-500" />
                <span>Competitive Soccer 11v11 - 3rd Place</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-blue-500" />
                <span>Table Tennis Tournament - TBD</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Summer 2021",
      content: (
        <Card className="border-l-4 border-l-orange-400">
          <CardContent className="p-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Summer Leagues</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <Trophy className="h-3.5 w-3.5 text-amber-500" />
                <span>House League - 1st Place</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Summer 2024",
      content: (
        <Card className="border-l-4 border-l-orange-400">
          <CardContent className="p-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Summer Leagues</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <Medal className="h-3.5 w-3.5 text-amber-500" />
                <span>Toronto Footy Sevens (thurs) - 3rd Place</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Medal className="h-3.5 w-3.5 text-amber-500" />
                <span>Toronto Footy Sevens (sun) - 3rd Place</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Summer 2025",
      content: (
        <Card className="border-l-4 border-l-orange-400">
          <CardContent className="p-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Summer Leagues</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <Medal className="h-3.5 w-3.5 text-amber-500" />
                <span>Stadium Sports League (fri) - 3rd Place</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-blue-500" />
                <span>Inter-MSA Tournament (July 6th) - Group Stage</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      ),
    },
  ]

  return (
    <div className="relative w-full overflow-clip">
      <Timeline
        data={sportsData}
        mainTitle="Sport Achievements"
        mainDescription="Here's a look at my sports achievements and milestones since middle school."
      />
    </div>
  )
}
