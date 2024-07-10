import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("posts");
  return rss({
    // `<title>` field in output xml
    title: "Matt’s Blog",
    // `<description>` field in output xml
    description: "Matt’s Blog and its rss feed!",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
