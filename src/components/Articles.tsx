import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { env } from "~/env";
import { articleService } from "~/services/article.service";
import { MediumFeed } from "~/types";

export const dynamic =
  env.NODE_ENV !== "production" ? "force-dynamic" : undefined;

export async function Articles() {
  const articles = await articleService.getArticles();

  return (
    <div
      id="articles"
      className="flex h-screen flex-col items-center justify-center gap-16 bg-amber-50 text-amber-950"
    >
      <p className="text-7xl font-medium">Writings</p>

      <div className="flex gap-16">
        {articles.map((article) => (
          <Link
            key={article.title}
            href={article.link}
            className="rounded-xl border border-transparent transition hover:border-amber-600"
          >
            <div className="flex w-80 flex-col gap-2 p-3">
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={300}
                style={{ width: 300, aspectRatio: 16 / 9 }}
                className="overflow-hidden rounded-lg"
              />

              <p className="text-2xl font-medium">{article.title}</p>

              <p className="text-sm opacity-80">
                {dayjs(article.date).format("D MMM YYYY")}
              </p>

              <p className="">{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

type Project = {
  name: string;
  description: string;
  source: string;
  demo: string;
};
