import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Search Leak Detector – Catch Registrar Theft",
  description: "Monitor domain registrars to detect if they register domains you searched for. Protect your domain research from search hijacking."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="075bb2bc-a00c-468e-ba23-dee6b6f4115b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
