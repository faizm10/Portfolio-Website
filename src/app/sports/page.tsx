import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  Medal,
  Star,
  PlayIcon as Player,
  UserRound,
} from "lucide-react";
export default async function GridView() {
  return (
    <section className="w-full py-6">
      <h1 className="text-2xl font-bold mb-6">Sport Achievements</h1>
      <p>
        here's a look at my sports achievements and milestones since middle
        school.
      </p>
      {/* Middle School */}
      <div className="mb-8 mt-4">
        <h2 className="text-lg font-bold mb-3 flex items-center">
          Middle School
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Grade 6 */}
          <Card className="border-l-4 border-l-orange-400">
            <CardContent className="p-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-sm">Grade 6</h3>
              </div>
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

          {/* Grade 7 */}
          <Card className="border-l-4 border-l-orange-400">
            <CardContent className="p-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-sm">Grade 7</h3>
              </div>
              <ul className="space-y-1.5 text-xs">
                <li className="flex items-center gap-1.5">
                  <UserRound className="h-3.5 w-3.5 text-green-500" />{" "}
                  <span>Varsity Soccer Team</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <UserRound className="h-3.5 w-3.5 text-green-500" />{" "}
                  <span>Track And Field - 800m</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <UserRound className="h-3.5 w-3.5 text-green-500" />{" "}
                  <span>Cross Country Team - Top 75</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Grade 8 */}
          <Card className="border-l-4 border-l-orange-400">
            <CardContent className="p-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-sm">Grade 8</h3>
              </div>
              <ul className="space-y-1.5 text-xs">
                <li className="flex items-center gap-1.5">
                  <UserRound className="h-3.5 w-3.5 text-green-500" />{" "}
                  <span>Varsity Soccer Team</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <UserRound className="h-3.5 w-3.5 text-green-500" />{" "}
                  <span>Track And Field - 1500m</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <UserRound className="h-3.5 w-3.5 text-green-500" />{" "}
                  <span>Cross Country Team - Top 25</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* High School */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-3 flex items-center">
          High School
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Grade 11 */}
          <Card className="border-l-4 border-l-orange-400">
            <CardContent className="p-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-sm">Grade 11</h3>
              </div>
              <ul className="space-y-1.5 text-xs">
                <li className="flex items-center gap-1.5">
                  <Trophy className="h-3.5 w-3.5 text-amber-500" />
                  <span>Varsity Soccer Team - 1st Place ROPSSA</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Grade 12 */}
          <Card className="border-l-4 border-l-orange-400">
            <CardContent className="p-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-sm">Grade 12</h3>
              </div>
              <ul className="space-y-1.5 text-xs">
                <li className="flex items-center gap-1.5">
                  <UserRound className="h-3.5 w-3.5 text-green-500" />{" "}
                  <span>Varsity Soccer Team</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 text-blue-500" />
                  <span>Varsity Badminton Team - QF</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* University */}
      <div>
        <h2 className="text-lg font-bold mb-3 flex items-center">
          University of Guelph
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Winter 2024 */}
          <Card className="border-l-4 border-l-orange-400">
            <CardContent className="p-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-sm">Winter 2024</h3>
              </div>
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

          {/* Fall 2024 */}
          <Card className="border-l-4 border-l-orange-400">
            <CardContent className="p-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-sm">Fall 2024</h3>
              </div>
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
                  <span>Competitive Ping Pong - QF</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Winter 2025 */}
          <Card className="border-l-4 border-l-orange-400">
            <CardContent className="p-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-sm">Winter 2025</h3>
              </div>
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
                  <UserRound className="h-3.5 w-3.5 text-green-500" />{" "}
                  <span>Open Fun Soccer 5v5 - 5th</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 text-blue-500" />
                  <span>Competitive Badminton - QF</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Summer Leagues */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-3 flex items-center">
          Summer Leagues
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Summer 2021 */}
          <Card className="border-l-4 border-l-orange-400">
            <CardContent className="p-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-sm">Summer 2021</h3>
              </div>
              <ul className="space-y-1.5 text-xs">
                <li className="flex items-center gap-1.5">
                  <Trophy className="h-3.5 w-3.5 text-amber-500" />
                  <span>House League - 1st Place</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Summer 2024 */}
          <Card className="border-l-4 border-l-orange-400">
            <CardContent className="p-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-sm">Summer 2024</h3>
              </div>
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
        </div>
      </div>
    </section>
  );
}

// <section className="p-6">
//   <h1 className="text-3xl font-bold text-center mb-6">Sport Achievements</h1>

//   {/* Middle School */}
//   <h2 className="text-xl font-semibold mt-6">Middle School</h2>
//   <ul className="list-none space-y-2">
//     <li className="flex flex-wrap items-center gap-2">
//       <Badge className="bg-blue-400">Grade 6</Badge>
//       <Badge>Varsity Soccer Team</Badge>
//       <Badge>Cross Country - Top 125</Badge>

//     </li>
//     <li className="flex flex-wrap items-center gap-2">
//       <Badge className="bg-blue-400">Grade 7</Badge>
//       <Badge>Varsity Soccer Team</Badge>
//       <Badge>Cross Country - Top 75</Badge>
//       <Badge>Track & Field - 800m</Badge>

//     </li>
//     <li className="flex flex-wrap items-center gap-2">
//       <Badge className="bg-blue-400">Grade 8</Badge>
//       <Badge>Varsity Soccer Team</Badge>
//       <Badge>Cross Country - Top 25</Badge>
//       <Badge>Track & Field - 1500m</Badge>

//     </li>

//   </ul>

//   {/* High School */}
//   <h2 className="text-xl font-semibold mt-6">High School</h2>
//   <ul className="list-none space-y-2">
//     <li className="flex flex-wrap items-center gap-2">
//       <Badge className="bg-green-400">Grade 11</Badge>
//       <Badge>Varsity Soccer - 1st Place ROPSSA</Badge>
//     </li>
//     <li className="flex flex-wrap items-center gap-2">
//       <Badge className="bg-green-400">Grade 12</Badge>
//       <Badge>Varsity Soccer Team</Badge>
//       <Badge>Varsity Badminton - Qualifiers</Badge>
//     </li>
//   </ul>

//   {/* University of Guelph */}
//   <h2 className="text-xl font-semibold mt-6">University of Guelph</h2>
//   <ul className="list-none space-y-2">
//     <li className="flex flex-wrap items-center gap-2">
//       <Badge className="bg-red-400">Winter 2024</Badge>
//       <Badge>Soccer 5v5 - Round of 16</Badge>
//       <Badge>Basketball 5v5 - Round of 16</Badge>
//       <Badge>Ping Pong - QuarterFinalist</Badge>
//     </li>
//     <li className="flex flex-wrap items-center gap-2">
//       <Badge className="bg-yellow-400">Fall 2024</Badge>
//       <Badge>Soccer 9v9 - 3rd (Competitive)</Badge>
//       <Badge>Soccer 9v9 - 2nd (Recreational)</Badge>
//       <Badge>Badminton - Round of 16</Badge>
//       <Badge>Ping Pong - QuarterFinalist</Badge>
//     </li>
//     <li className="flex flex-wrap items-center gap-2">
//       <Badge className="bg-red-400">Winter 2025</Badge>
//       <Badge>Soccer 5v5 - Semi-Finalist</Badge>
//       <Badge>Soccer 5v5 - QuarterFinalist (Recreational)</Badge>
//       <Badge>Badminton - QuarterFinalist</Badge>
//       <Badge>Open Fun Soccer</Badge>
//     </li>
//   </ul>

//   {/* Summer Leagues */}
//   <h2 className="text-xl font-semibold mt-6">Summer Leagues</h2>
//   <ul className="list-none space-y-2">
//     <li className="flex flex-wrap items-center gap-2">
//       <Badge className="bg-purple-400">Summer 2021</Badge>
//       <Badge>House League - 1st Place</Badge>
//     </li>
//     <li className="flex flex-wrap items-center gap-2">
//       <Badge className="bg-purple-400">Summer 2024</Badge>
//       <Badge>Toronto Footy Sevens - 3rd Place (Thurs & Sun)</Badge>
//     </li>
//   </ul>
// </section>
