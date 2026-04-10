import { Hero } from "./sections/Hero";
import { InviteMessage } from "./sections/InviteMessage";
import { WeddingCountdown } from "./sections/WeddingCountdown";
import { Ceremony } from "./sections/Ceremony";
import { WeddingGathering } from "./sections/WeddingGathering";
import { BrideGroom } from "./sections/BrideGroom";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <main className="min-h-screen min-h-[100dvh] w-full min-w-0 overflow-x-hidden overscroll-y-none">
      <Hero />
      <InviteMessage />
      <WeddingCountdown />
      <Ceremony />
      <WeddingGathering />
      <BrideGroom />
      <Footer />
    </main>
  );
}
