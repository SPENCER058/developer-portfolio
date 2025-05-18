"use client"

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { AboutMeCard } from "./components/ui/AboutMeCard";
import { HeaderCard } from "./components/ui/HeaderCard";
import { PortfolioCard } from "./components/ui/PortfolioCard";
import { TechStackCard } from "./components/ui/TechStackCard";
import { ContactCard } from "./components/ui/ContactCard";

export default function Home() {

  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash?.substring(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Wait for rendering
      }
    }
  }, [pathname]);

  return (
    <>
      <div className="pt-6 lg:pt-14 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 relative w-full bg-transparent">
        <div className="flex flex-col gap-24 md:gap-30 py-10 md:py-14">
          <HeaderCard />
          <AboutMeCard />
          <PortfolioCard />
          <TechStackCard />
          <ContactCard />
        </div>
      </div>
    </>
  );
}
