import { GlowCircle } from "./components/GlowCircle";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <>
      <div className="relative w-full bg-transparent">
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

        <div className="py-16">
          <Header />
        </div>
      </div>
    </>
  );
}
