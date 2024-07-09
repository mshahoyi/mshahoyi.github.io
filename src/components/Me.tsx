import Image from "next/image";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useMemo } from "react";

export function Me() {
  const POINT_SEPARATOR = useMemo(
    () => <span className="text-neutral-300">·</span>,
    [],
  );

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 bg-neutral-50 text-neutral-900">
      {/* Image*/}
      <Image
        src="/me.jpeg"
        alt="Me"
        width={256}
        height={256}
        className="rounded-full"
      />

      {/* Name*/}
      <div className="flex flex-col items-center gap-2">
        <p className="text-xl font-medium">Mohammed Y. Shahoyi</p>
        <p className="text-neutral-600">
          I am a founder, engineer, designer, and doctor in descending order
        </p>
      </div>

      {/* Navigation */}
      {/* <div className="gap-3 text-xl">
        <Link className="px-3" href="/#articles">
          Articles
        </Link>
        {POINT_SEPARATOR}
        <Link className="px-3" href="/#projects">
          Projects
        </Link>
      </div> */}

      {/* Links */}
      <div className="flex gap-5">
        <Link
          href="https://github.com/mshahoyi"
          className="flex items-center gap-1"
        >
          <GithubLogo size={24} className="text-neutral-900" />
          <span className="text-xs text-neutral-900">Github</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/MohammedShahoe"
          className="flex items-center gap-1"
        >
          <LinkedinLogo size={24} className="text-neutral-900" />
          <span className="text-xs text-neutral-900">LinkedIn</span>
        </Link>
      </div>
    </div>
  );
}
