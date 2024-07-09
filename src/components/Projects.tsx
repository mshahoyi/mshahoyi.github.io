import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useMemo } from "react";

const PROJECTS: Project[] = [
  {
    name: "React Native App Starter",
    description: "A starter kit for React Native apps",
    source: "https://github.com/mshahoyi/React-Native-App-Starter",
    demo: "https://rn-starter.vercel.app/",
  },
  {
    name: "Padash",
    description: "A simple notepad app",
    source: "https://github.com/mshahoyi/React-Native-App-Starter",
    demo: "https://rn-starter.vercel.app/",
  },
];

export function Projects() {
  const POINT_SEPARATOR = useMemo(
    () => <span className="text-neutral-300">·</span>,
    [],
  );

  return (
    <div
      id="projects"
      className="flex h-screen flex-col items-center justify-center gap-16 bg-teal-50 text-teal-900"
    >
      <p className="text-7xl font-medium">Doings</p>

      <div className="flex gap-10">
        {PROJECTS.map((project) => (
          <div key={project.name} className="flex w-96 flex-col gap-3">
            <p className="text-2xl font-medium">{project.name}</p>
            <p className="opacity-80">{project.description}</p>
            <div className="flex gap-3">
              {/* Demo */}
              <Link href={project.source} className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-green-600" />
                <span className="text-sm underline">Demo</span>
              </Link>

              {POINT_SEPARATOR}

              {/* Source */}
              <Link href={project.demo} className="flex items-center gap-1">
                <GithubLogo size={20} />
                <span className="text-sm underline">Source</span>
              </Link>
            </div>
          </div>
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
