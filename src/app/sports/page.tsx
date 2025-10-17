import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  Medal,
  Star,
  UserRound,
  School,
  CalendarDays,
} from "lucide-react";

export default async function GridView() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Sport Achievements
      </h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Here's a look at my sports achievements and milestones since middle
        school.
      </p>

      {/* Middle School */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2 border-b pb-2">
          <School className="h-6 w-6 text-gray-600" />
          Middle School
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Grade 6 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Grade 6
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-gray-500" />
                  <span>Cross Country Team - Top 125</span>
                </li>
                <li className="flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-gray-500" />
                  <span>Varsity Soccer Team</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* Grade 7 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Grade 7
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-gray-500" />
                  <span>Cross Country Team - Top 75</span>
                </li>
                <li className="flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-gray-500" />
                  <span>Varsity Soccer Team</span>
                </li>
                <li className="flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-gray-500" />
                  <span>Track And Field - 800m</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* Grade 8 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Grade 8
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-gray-500" />
                  <span>Cross Country Team - Top 25</span>
                </li>
                <li className="flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-gray-500" />
                  <span>Varsity Soccer Team</span>
                </li>
                <li className="flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-gray-500" />
                  <span>Track And Field - 1500m</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* High School */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2 border-b pb-2">
          <School className="h-6 w-6 text-gray-600" />
          High School
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Grade 11 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Grade 11
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                  <span>Varsity Soccer Team - 1st Place ROPSSA</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* Grade 12 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Grade 12
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Varsity Badminton Team - QF</span>
                </li>
                <li className="flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-gray-500" />
                  <span>Varsity Soccer Team</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* University of Guelph */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2 border-b pb-2">
          <School className="h-6 w-6 text-gray-600" />
          University of Guelph
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Winter 2024 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Winter 2024
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Competitive Soccer 5v5 - QF</span>
                </li>

                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Competitive Ping Pong - QF</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Competitive Basketball 5v5 - Rd of 16</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Competitive Soccer 5v5 - Rd of 16</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* Fall 2024 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Fall 2024
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-stone-500" />
                  <span>Recreational Soccer 9v9 - 2nd</span>
                </li>
                <li className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-stone-500" />
                  <span>Competitive Soccer 9v9 - 3rd</span>
                </li>

                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Competitive Basketball - QF</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Competitive Ping Pong - QF</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Competitive Badminton - Rd of 16</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* Winter 2025 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Winter 2025
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-stone-500" />
                  <span>Competitive Soccer 5v5 - 3rd</span>
                </li>
                <li className="flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-gray-500" />
                  <span>Open Fun Soccer 5v5 - 5th</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Recreational Soccer 5v5 - QF</span>
                </li>

                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Competitive Badminton - QF</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Fall 2025
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Open Fun Soccer 11v11 - Ongoing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Competitive Soccer 11v11 - Ongoing</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* University of Waterloo */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2 border-b pb-2">
          <School className="h-6 w-6 text-gray-600" />
          University of Waterloo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Summer 2025 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Summer 2025
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-stone-500" />
                  <span>Competitive Soccer 11v11 - 3rd Place</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* Fall 2025 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Fall 2025
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Competitive Soccer 11v11 - TBD</span>
                </li>
              </ul>
               <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Competitive Soccer 6v6 - TBD</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Summer Leagues */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2 border-b pb-2">
          <CalendarDays className="h-6 w-6 text-gray-600" />
          Summer Leagues
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Summer 2021 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Summer 2021
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                  <span>House League - 1st Place</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* Summer 2024 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Summer 2024
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-stone-500" />
                  <span>Toronto Footy Sevens (thurs) - 3rd Place</span>
                </li>
                <li className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-stone-500" />
                  <span>Toronto Footy Sevens (sun) - 3rd Place</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* Summer 2025 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Summer 2025
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-stone-500" />
                  {/* <Star className="h-4 w-4 text-blue-600" /> */}
                  <span>
                    Stadium Sports League (Summer - Wed/Thurs) - 3rd Place
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-stone-500" />
                  <span>
                    Stadium Sports League (Spring - Fridays) - 3rd Place
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Inter-MSA Tournament (July 6th) - Group Stage</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-base text-primary">
                  Fall 2025
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  {/* <Medal className="h-4 w-4 text-stone-500" /> */}
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>
                    Stadium Sports League (Summer - Fri) - Ongoing
                  </span>
                </li>
              </ul>
            </CardContent>
        </div>
      </div>
    </section>
  );
}
