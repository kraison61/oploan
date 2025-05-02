import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { FeatureItem } from "../Feature/FeatureItem";
import { Rocket, Lock, DollarSign } from "lucide-react";



interface HeroProps {
  blog?: {
    id: string;
    title?: string;
    description?: string;
    heading?: string;
    content_heading?: string;
    review_1?: string;
    review_2?: string;
    review_3?: string;
    review_4?: string;
    review_5?: string;
    review_6?: string;
    review_7?: string;
    review_8?: string;
    review_9?: string;
  };
}

const Hero = ({ blog }: HeroProps) => {
  const {
    heading = "10 Best Alternatives to Payday Loans for People with Poor Credit",
    content_heading = `Facing a cash crunch but worried your poor credit will hold you back?
You’re not alone — millions of Americans find themselves stuck between a financial emergency and payday loan traps that only make things worse.

The good news? You’ve got better, safer options. Whether you’re dealing with unexpected bills, car repairs, or just trying to keep up — there are smart, affordable alternatives available. This guide will walk you through 10 of the best payday loan alternatives, especially if your credit isn’t perfect. Let’s find a real solution that works for you.`,
  } = blog || {};

  return (
    <div className="w-full pt-[10vh] md:pt-[12vh] min-h-screen bg-gradient-to-b from-[#f7f6fb] to-white">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="order-1">
            <div
              dangerouslySetInnerHTML={{ __html: heading }}
              className="text-3xl sm:text-5xl md:text-6xl mt-6 mb-6 font-bold leading-tight text-primary"
            ></div>
            <div className="flex justify-center">
              <Link href="/application-form">
                <Button className="bg-[#ff6b6b] hover:bg-[#ff4c4c] text-white px-10 py-8 rounded-4xl text-3xl font-semibold shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
                  Get Started Now
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="text-sm text-gray-500 mt-4">
                <ul className="space-y-1 rounded-2xl p-3 w-full max-w-md">
                  <li>
                    <FeatureItem
                      icon={<Rocket className="text-blue-600" />}
                      title="Fast approval process"
                    />
                  </li>
                  <li>
                    <FeatureItem
                      icon={<DollarSign className="text-green-600" />}
                      title="No hidden fees"
                    />
                  </li>
                  <li>
                    <FeatureItem
                      icon={<Lock className="text-purple-600" />}
                      title="Safe and secure"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: content_heading }}
              className="text-gray-700 mb-8 leading-relaxed"
            ></div>
          </div>

          {/* Image */}
          <div className="order-2 flex justify-center lg:justify-end">
            <Link href="/application-form">
            <Image
              src="/images/s2.png"
              alt="hero"
              width={700}
              height={700}
              className="w-[60%] sm:w-[50%] md:w-[60%] lg:w-[80%] xl:w-[80%] h-auto animate-fade-in rounded-4xl"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
