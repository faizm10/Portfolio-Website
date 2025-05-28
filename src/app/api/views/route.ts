import { incrementViews, getViews } from "@/data/page-views"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json()

    console.log("Incrementing views for slug:", slug)

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 })
    }

    const views = await incrementViews(slug)
    console.log("Views incremented to:", views)

    return NextResponse.json({ views })
  } catch (error) {
    console.error("Error in POST /api/views:", error)
    return NextResponse.json({ error: "Failed to increment views" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const slug = url.searchParams.get("slug")

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 })
    }

    const views = await getViews(slug)
    return NextResponse.json({ views })
  } catch (error) {
    console.error("Error in GET /api/views:", error)
    return NextResponse.json({ error: "Failed to get views" }, { status: 500 })
  }
}
