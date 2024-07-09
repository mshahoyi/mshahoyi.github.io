import "~/styles/globals.css";

import { Lora } from "next/font/google";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammed Shahoyi",
  description: "Mohammed Shahoyi's website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Lora({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
