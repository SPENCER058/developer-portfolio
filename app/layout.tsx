import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AwesomeNeko",
    template: "%s | AwesomeNeko",
  },

  description: "Welcome to AwesomeNeko",
  keywords: ["galih-panji-hanindito", "portfolio", "game-developer", "website"],
  authors: [{ name: "Galih Panji Hanindito" }],
  generator: "Next.js",
  applicationName: "AwesomeNeko",
  creator: "Galih Panji Hanindito",
  publisher: "Galih Panji Hanindito",

  openGraph: {
    title: "OG Title",
    description: "OG Description",
    url: "https://yourdomain.com/page",
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

        <main className="px-32 gap-4 ">
          {children}
        </main>

        {/* <Footer /> */}

      </body>
    </html>
  );
}
