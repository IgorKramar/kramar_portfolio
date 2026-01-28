import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Header } from "@/components";
import { LocaleProvider, ThemeProvider } from "@/contexts";
import { themeScript } from "./theme-script";
import "./globals.css";
import { SmoothScrollProvider } from "@/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ikramar.ru"),
  title: {
    default: "Игорь Крамарь — Senior Frontend / Архитектор UI‑систем",
    template: "%s — Игорь Крамарь",
  },
  description:
    "Портфолио: UI архитектура, дизайн‑системы, токены, темизация, доступность (a11y), тестирование и качество. Next.js + TypeScript.",
  category: "technology",
  keywords: [
    "Игорь Крамарь",
    "Igor Kramar",
    "ikramar",
    "frontend",
    "front-end",
    "frontend developer",
    "senior frontend",
    "react",
    "next.js",
    "typescript",
    "ui architecture",
    "ui architect",
    "design system",
    "design systems",
    "design tokens",
    "component library",
    "ui kit",
    "accessibility",
    "a11y",
    "web performance",
    "testing",
    "quality",
    "dx",
    "портфолио фронтенд",
    "фронтенд разработчик",
    "react разработчик",
    "next.js разработчик",
  ],
  applicationName: "ikramar.ru",
  authors: [{ name: "Игорь Крамарь", url: "https://ikramar.ru" }],
  creator: "Игорь Крамарь",
  publisher: "Игорь Крамарь",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Игорь Крамарь — Senior Frontend / Архитектор UI‑систем",
    description:
      "UI архитектура, дизайн‑системы, токены, темизация, a11y, тестирование и качество. Кейсы и опыт.",
    siteName: "ikramar.ru",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Игорь Крамарь — Senior Frontend / Архитектор UI‑систем",
    description:
      "Портфолио: UI архитектура, дизайн‑системы, токены, темизация, a11y, тестирование и качество.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Inline theme script to prevent FOUC */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LocaleProvider>
            <Header />
            <main id="main">{children}</main>
            <Footer />
            <SmoothScrollProvider />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
