"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Heading from "../heading/heading";
const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    description:
      "A basic plan for startups and individual users limits upto 5 users.",
    monthlyPrice: 10,
    yearlyPrice: 100,
    features: [
      "AI-powered analytics",
      "Basic support",
      "40 is the limit",
      "Access to basic AI tools",
    ],
  },
  {
    id: 2,
    name: "Premium",
    description: "A premium plan for growing businesses or personal projects",
    monthlyPrice: 20,
    yearlyPrice: 200,
    features: [
      "Priority support",
      "100 todos",
      "Access to all AI tools",
      "Custom integrations",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    description:
      "An enterprise plan with advanced features for large organizations",
    monthlyPrice: 50,
    yearlyPrice: 500,
    features: [
      "Custom AI solutions",
      "Unlimited todos",
      "Custom integrations",
      "Data intigrity",
    ],
  },
  {
    id: 4,
    name: "Another Level",
    description:
      "An enterprise plan with advanced features for large organizations",
    monthlyPrice: 500,
    yearlyPrice: 2000,
    features: [
      "Custom AI solutions",
      "Unlimited services",
      "Custom integrations ",
      "Data security",
    ],
  },
];

export default function GradientPricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <Heading
          heading="Simple Pricing"
          subheading=" Enjoy your free ride while it lasts! I wont charge you a dime until
          you have squeezed every last drop out of the free tier. After that,
          brace yourself—these prices are about to get real"
        />

        <div className="flex items-center   justify-center mb-12">
          <span
            className={`mr-2 ${isAnnual ? "text-muted-foreground" : "text-white"}`}
          >
            Monthly
          </span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span
            className={`ml-2 ${isAnnual ? "text-white" : "text-muted-foreground"}`}
          >
            Annual
          </span>

          
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className=" p-6 flex flex-col border  rounded-lg  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black pointer-events-none "
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-300 mb-4 text-sm">{plan.description}</p>
              <div className="text-4xl font-bold mb-4 ">
                ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="text-xl font-normal text-gray-400">
                  /{isAnnual ? "year" : "month"}
                </span>
              </div>
              <Button className="mb-6 transition-all cursor-pointer ">
                Subscribe
              </Button>
              <ul className="space-y-2 mt-auto">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="bg-green-500 h-6 w-6 rounded-full flex items-center justify-center mr-2">
                      <Check size={18} className="text-white" />
                    </span>
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
