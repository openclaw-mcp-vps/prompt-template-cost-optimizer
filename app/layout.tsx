import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Cost Optimizer – Find Cheapest AI Prompt Variations",
  description: "Automatically test multiple prompt variations against your dataset to find the cheapest version that maintains quality. Track token usage and API costs across LLM providers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cf646d90-f336-442c-9b7c-0445c32f71de"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
