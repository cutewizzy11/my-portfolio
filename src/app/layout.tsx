import type { Metadata } from "next";
import { Fira_Code, Share_Tech_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const shareTech = Share_Tech_Mono({
  variable: "--font-share-tech",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paulanyebe.dev"),
  title: "Paul Anyebe | Backend Developer, Cybersecurity Graduate & Web Developer",
  description:
    "Premium portfolio for Paul Anyebe, a Nigerian Software Developer, Cybersecurity Science graduate, systems administrator, and human-in-the-loop AI specialist.",
  keywords: ["Paul Anyebe", "AI Generalist", "Cybersecurity", "Web Developer", "Systems Administrator", "Nigeria"],
  openGraph: {
    title: "Paul Anyebe | Secure AI-era Technologist",
    description: "software development, cybersecurity, web development, systems administration, and human-in-the-loop AI portfolio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${firaCode.variable} ${shareTech.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
