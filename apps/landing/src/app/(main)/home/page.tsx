"use client";

import FeaturesTemp from "@/pattern/home/templates/features-temp";
import HeroSection from "@/pattern/home/templates/hero-section";
import HowItWorksTemp from "@/pattern/home/templates/how-it-works-temp";
import IntegrationsTemp from "@/pattern/home/templates/integrations-temp";
import JoinUsWidget from "@/pattern/home/templates/join-us-widget";
import ReviewsTemp from "@/pattern/home/templates/reviews-temp";
import WhoWeServe from "@/pattern/home/templates/who-we-serve";

export default function Home() {
    return (
        <div className="w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]">
            <HeroSection />
            <WhoWeServe />
            <HowItWorksTemp />
            <IntegrationsTemp />
            <ReviewsTemp />
            <FeaturesTemp />
            <JoinUsWidget />
        </div>
    );
}
