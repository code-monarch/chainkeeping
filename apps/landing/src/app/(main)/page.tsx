"use client";

import HeroSection from "@/pattern/home/templates/hero-section";
import JoinUsWidget from "@/pattern/home/templates/join-us-widget";
import ReviewsTemp from "@/pattern/home/templates/reviews-temp";

export default function Home() {
  return (
    <div className="w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]">
      <HeroSection />
      <ReviewsTemp />
      <JoinUsWidget />
    </div>
  );
}
