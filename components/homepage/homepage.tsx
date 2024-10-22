"use client";
import React from "react";
import Meteors from "../ui/meteors";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import BlurIn from "../ui/blur-in";
import { RainbowButton } from "../ui/rainbow-button";
import { BorderBeam } from "../ui/border-beam";
import PinkGradient from "../gradientEffects/pinkgradient";
import PricingPage from "../pricing/pricingCard";
import { MarqueeDemo } from "../marquee/marquee";
import Footer from "../footer/footer";
import { AnimatedBeamDemo } from "../animatedbeam/animatedbeam";
import Heading from "../heading/heading";
const Homepage = () => {
  return (
    <div>
      <div className="relative  overflow-hidden  ">
        <Meteors number={100} />
        <div className="md:mt-40 sm:mt-32 mt-20">
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4  w-px shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Introducing Todoapp
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </div>
        <BlurIn word="Another Todo" className="mt-2" />
        <p className="text-center mt-2 text-muted-foreground  max-w-screen-md m-auto  p-2">
          Start capturing your notes and daily tasks effortlessly. Organize your
          ideas, tasks, and reminders with ease. Stay on top of your to-dos and
          never miss a thing. Keep everything in one place, accessible anytime.
        </p>

        <div className="flex items-center my-10 justify-center ">
          <RainbowButton>
            Track Your Tasks <ArrowRight size={18} />
          </RainbowButton>
        </div>

        <div className="mt-20">
          <div className="md:block hidden">
            <PinkGradient />
          </div>
          <div className="relative  flex   max-w-7xl m-auto mt-4 flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
            <div>
              <img
                src="https://startup-template-sage.vercel.app/hero-dark.png"
                alt="heroimage"
              />
            </div>
            <BorderBeam className="" size={250} duration={12} delay={9} />
            <div className="absolute inset-x-0 bottom-0 md:h-[80vh] h-[20vh]  bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <Heading
        heading="One Place"
        subheading="All your notes, tasks, and reminders in one place. Because, you know, juggling everything everywhere was totally working out before. (X to doubt)"
      />
      <div className="my-20">
        <AnimatedBeamDemo />
      </div>
      <div className="my-20">
        <PricingPage />
      </div>
      <Heading
        heading=" Loved by people"
        subheading="Even your ex is loving it—seriously, they can't get enough. Trust me, if it can keep their life together, it'll work wonders for yours"
      />
      <div className="my-20">
        <MarqueeDemo />
      </div>
      <div className=" mt-10  bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
