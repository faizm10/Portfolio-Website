import fs from "fs"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")
const VIEWS_FILE = path.join(DATA_DIR, "page-views.json")

// Initialize the views file if it doesn't exist
export function initViewsFile() {
  try {
    // Create data directory if it doesn't exist
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true })
    }

    // Create views file if it doesn't exist
    if (!fs.existsSync(VIEWS_FILE)) {
      fs.writeFileSync(VIEWS_FILE, JSON.stringify({}), "utf-8")
      console.log("Created page-views.json file")
    }
  } catch (error) {
    console.error("Error initializing views file:", error)
  }
}

// Get views for a specific slug
export async function getViews(slug: string): Promise<number> {
  try {
    initViewsFile()
    const data = JSON.parse(fs.readFileSync(VIEWS_FILE, "utf-8"))
    return data[slug] || 0
  } catch (error) {
    console.error("Error getting views:", error)
    return 0
  }
}

// Get views for multiple slugs
export async function getAllViews(): Promise<Record<string, number>> {
  try {
    initViewsFile()
    return JSON.parse(fs.readFileSync(VIEWS_FILE, "utf-8"))
  } catch (error) {
    console.error("Error getting all views:", error)
    return {}
  }
}

// Increment views for a specific slug
export async function incrementViews(slug: string): Promise<number> {
  try {
    initViewsFile()
    const data = JSON.parse(fs.readFileSync(VIEWS_FILE, "utf-8"))
    const views = (data[slug] || 0) + 1
    data[slug] = views
    fs.writeFileSync(VIEWS_FILE, JSON.stringify(data, null, 2), "utf-8")
    console.log(`Incremented views for ${slug} to ${views}`)
    return views
  } catch (error) {
    console.error("Error incrementing views:", error)
    return 0
  }
}
