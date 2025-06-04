import path from "path";
import { promises as fs } from "fs";

export async function GET(request) {
  try {
    // Extract the slug from the URL
    const url = new URL(request.url);
    const slug = url.pathname.split("/").pop();

    // fetching data from a JSON file
    const filePath = path.join(process.cwd(), "public", "blogs/blogs.json");
    const data = await fs.readFile(filePath, "utf-8");

    const blogPosts = JSON.parse(data);
    const blogPostData = blogPosts.find((post) => post.slug === slug);

    if (!blogPostData) {
      return new Response(
        JSON.stringify({ error: "Blog post not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify(blogPostData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
