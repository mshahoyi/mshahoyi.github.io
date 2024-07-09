import { expect, test, describe, spyOn } from "bun:test";

import { articleService } from "../article.service";

describe("articleService", () => {
  test("getArticles", async () => {
    spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => sampleApiResponse,
    } as never);

    const articles = await articleService.getArticles();

    expect(articles).toStrictEqual([
      {
        title: "First post",
        description: "This is my first post on medium!",
        image: expect.any(String),
        link: "https://medium.com/@mshahoyi/first-post-2038a514b848?source=rss-23908f85226f------2",
        date: new Date("2024-07-08 17:40:21"),
      },
    ]);
  });
});

const sampleApiResponse = {
  status: "ok",
  feed: {
    url: "https://www.medium.com/feed/@mshahoyi",
    title: "Stories by Muhammad Yasin on Medium",
    link: "https://medium.com/@mshahoyi?source=rss-23908f85226f------2",
    author: "",
    description: "Stories by Muhammad Yasin on Medium",
    image:
      "https://cdn-images-1.medium.com/fit/c/150/150/0*6uXMEMfbO_pnnfLx.jpg",
  },
  items: [
    {
      title: "First post",
      pubDate: "2024-07-08 17:40:21",
      link: "https://medium.com/@mshahoyi/first-post-2038a514b848?source=rss-23908f85226f------2",
      guid: "https://medium.com/p/2038a514b848",
      author: "Muhammad Yasin",
      thumbnail: "",
      description: ` <p>This is my first post on medium!</p> <img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=2038a514b848" width="1" height="1" alt=""> `,
      content: ` <p>This is my first post on medium!</p> <img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=2038a514b848" width="1" height="1" alt=""> `,
      enclosure: {},
      categories: [],
    },
  ],
};
