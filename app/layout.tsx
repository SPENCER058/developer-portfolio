import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { GlowCircle } from "./components/GlowCircle";

export const metadata: Metadata = {
  title: {
    default: "AwesomeNeko",
    template: "%s | AwesomeNeko",
  },

  description: "Galih Panji Portfolio Website",
  keywords: ["galih-panji-hanindito", "portfolio", "game-developer", "website"],
  authors: [{ name: "Galih Panji Hanindito" }],
  generator: "Next.js",
  applicationName: "AwesomeNeko",
  creator: "Galih Panji Hanindito",
  publisher: "Galih Panji Hanindito",

  openGraph: {
    title: "AwesomeNeko",
    description: "Galih Panji Portfolio Website",
    url: "https://awesomeneko.vercel.app",
    siteName: "AwesomeNeko",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 800,
        height: 600,
        alt: "Cute OG image",
      },
    ],
    locale: "en_US",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Twitter Title",
    description: "Tweet preview description",
    creator: "Galih Panji Hanindito",
    images: ["https://yourdomain.com/twitter-image.png"],
  },

};

// deprecated
// themeColor: "#ffffff",
// colorScheme: "dark",
// viewport: "width=device-width, initial-scale=1",

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ['400', '500', '600'],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <div className="absolute inset-0 pointer-events-none z-0">
          <GlowCircle
            size={700}
            color="bg-(--color-glow-primary)"
            opacity="opacity-35"
            position="bottom-[10px] right-[1000px]"
            blur="blur-[150px]"
          />
          <div className="overflow-x-hidden">
            <GlowCircle
              size={700}
              color="bg-(--color-glow-secondary)"
              opacity="opacity-27"
              position="bottom-[-300px] left-[1100px]"
              blur="blur-[150px]"
            />
          </div>
        </div>
        <main className="px-32">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
