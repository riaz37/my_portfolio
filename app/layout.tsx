// app/layout.tsx
import type { Metadata } from "next";
import { inter, jetbrain_mono } from "@/app/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaTools,
  FaAward,
} from "react-icons/fa";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Riazul Islam",
  description: "Personal portfolio of Riazul Islam",
};

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Services",
    link: "#services",
    icon: <FaTools className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Work",
    link: "#work",
    icon: <FaBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Certifications",
    link: "#certifications",
    icon: <FaAward className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
        <meta property="og:title" content="Riazul's Portfolio" />
        <meta
          property="og:description"
          content="Full Stack Web Developer and AI Enthusiast"
        />
        <meta property="og:url" content="https://riaz37.vercel.app" />
        <meta
          property="og:image"
          content="https://riaz37.vercel.app/pics/web_screenshot.png"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (window.location.href === "https://github.com/riaz37") {
              window.location.replace("https://riaz37.vercel.app");
            }
          `,
          }}
        />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${jetbrain_mono.variable} ${inter.variable} font-mono antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />

          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
