import { NextResponse } from "next/server";
import RSSParser from "rss-parser";

export async function GET(req: Request) {
  try {
    // GET NEXTFLIX
    const feedURL = "https://netflixtechblog.com/feed";

    const parser = new RSSParser();
    let articles = [];

    const parse = async (url: string) => {
      const feed = await parser.parseURL(url);

      feed.items.forEach((item) => {
        articles.push({ item });
      });
    };

    return NextResponse.json(parse(feedURL));
  } catch (error) {
    console.log("GET_NEWS_ERROR", error);
  }
}
