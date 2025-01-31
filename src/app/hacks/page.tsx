// /hacks/page.tsx
import React from "react";
import { HackathonList } from "@/components/animated-list-demo";
import BlurFade from "@/components/ui/blur-fade";
const BLUR_FADE_DELAY = 0.04;

const HacksPage = () => {
  return (
    <main>
      <HackathonList />
    </main>
  );
};

export default HacksPage;
