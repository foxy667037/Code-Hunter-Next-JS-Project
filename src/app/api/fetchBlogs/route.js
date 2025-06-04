import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    // path of the json file
    const filepath = path.join(process.cwd(), "public", "blogs/blogs.json");

    // read the file
    const data = await fs.readFile(filepath, "utf-8");

    // parse the data
    const blogs = JSON.parse(data);

    // Return blogs as a JSON response
    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch blog data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
