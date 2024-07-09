import { Articles } from "~/components/Articles";
import { Me } from "~/components/Me";
import { Projects } from "~/components/Projects";
import { env } from "~/env";

export const dynamic = env.NODE_ENV !== "production" ? "force-dynamic" : "auto";

export default function HomePage() {
  return (
    <main>
      <Me />
      {/* <Articles />
      <Projects /> */}
    </main>
  );
}
