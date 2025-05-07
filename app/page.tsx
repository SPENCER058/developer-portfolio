import { AboutMeCard } from "./components/ui/AboutMeCard";
import { HeaderCard } from "./components/ui/HeaderCard";
import { PortfolioCard } from "./components/ui/PortfolioCard";
import { TechStackCard } from "./components/ui/TechStackCard";
import { ContactCard } from "./components/ui/ContactCard";

export default function Home() {
  return (
    <>
      <div className="relative w-full bg-transparent">
        <div className="flex flex-col gap-40 py-16">
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
