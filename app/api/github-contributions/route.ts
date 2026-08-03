import { NextResponse } from "next/server";
import { site } from "@/app/data/site";

export const revalidate = 3600; // 1 hour

const QUERY = `query($u:String!,$from:DateTime!,$to:DateTime!){
  user(login:$u){
    contributionsCollection(from:$from,to:$to){
      contributionCalendar{
        totalContributions
        weeks{contributionDays{contributionCount date weekday}}
      }
    }
  }
}`;

export async function GET() {
  const token =
    process.env.GITHUB_TOKEN ||
    process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTION_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "GitHub token not configured" },
      { status: 503 },
    );
  }

  const year = new Date().getFullYear();

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: {
          u: site.githubUsername,
          from: `${year}-01-01T00:00:00Z`,
          to: `${year}-12-31T23:59:59Z`,
        },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `GitHub API ${res.status}` },
        { status: 502 },
      );
    }

    const json = await res.json();
    if (json.errors?.length) {
      return NextResponse.json(
        { error: json.errors[0]?.message ?? "GraphQL error" },
        { status: 502 },
      );
    }

    const calendar =
      json.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return NextResponse.json(
        { error: "No contribution data" },
        { status: 404 },
      );
    }

    return NextResponse.json({ year, calendar });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch contributions" },
      { status: 500 },
    );
  }
}
