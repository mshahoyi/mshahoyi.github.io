import { load } from "cheerio";
import { MediumFeed } from "~/types";

class ArticleService {
  async getArticles() {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.medium.com%2Ffeed%2F%40mshahoyi",
      { cache: "no-store" },
    );

    const json = (await response.json()) as MediumFeed;
    console.log(json);
    return this.transformArticles(json.items);
  }

  private transformArticles(articles: MediumFeed["items"]): {
    title: string;
    description: string;
    image: string;
    link: string;
    date: Date;
  }[] {
    return articles.map((article) => {
      const $ = load(article.description);
      const description = $("p").text();
      const image = $("img").attr("src")!;

      return {
        title: article.title,
        description: description,
        link: article.link,
        image,
        date: new Date(article.pubDate),
      };
    });
  }
}

export const articleService = new ArticleService();
