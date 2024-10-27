"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Wifi } from "lucide-react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import Heading from "../heading/heading";

const subscriptionPlans = [
  {
    name: "Basic",
    monthlyPrice: "$9.99",
    annualPrice: "$99.99",
    color: "from-gray-600 to-gray-800",
    features: ["10GB Storage", "2 Users", "Basic Support"],
  },
  {
    name: "Pro",
    monthlyPrice: "$19.99",
    annualPrice: "$199.99",
    color: "from-blue-600 to-blue-800",
    isPremium: true,
    features: [
      "100GB Storage",
      "5 Users",
      "Priority Support",
      "Advanced Analytics",
    ],
  },
  {
    name: "Team",
    monthlyPrice: "$49.99",
    annualPrice: "$499.99",
    color: "from-gray-600 to-gray-800",
    features: [
      "500GB Storage",
      "10 Users",
      "24/7 Support",
      "Custom Integrations",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "$99.99",
    annualPrice: "$999.99",
    color: "from-gray-600 to-gray-800",
    features: [
      "Unlimited Storage",
      "Unlimited Users",
      "Dedicated Support",
      "AI-Powered Insights",
    ],
  },
];

export default function Component() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Heading
          heading="Simple Pricing"
          subheading="Enjoy your free ride while it lasts! I won’t charge you a dime until you have squeezed every last drop out of the free tier. After that, brace yourself—these prices are about to get real."
        />
        <div className="flex justify-center items-center mb-8">
          <Label htmlFor="annual-toggle" className="mr-2 text-white">
            Monthly
          </Label>
          <Switch
            id="annual-toggle"
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
          />
          <Label htmlFor="annual-toggle" className="ml-2 text-white">
            Annual
          </Label>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {subscriptionPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 bg-black border rounded-xl ${plan.isPremium ? "shadow-lg shadow-purple-900" : "ring-offset-purple-900"}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-70`}
              ></div>
              <div className="absolute inset-0 bg-black rounded-lg backdrop-blur-sm"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3
                      className={`text-2xl font-bold ${plan.isPremium ? "text-purple-900" : "text-white"}`}
                    >
                      {plan.name}
                    </h3>
                    <div className="w-12 h-8 bg-yellow-300 rounded-md flex items-center justify-center">
                      <div className="w-8 h-6 bg-yellow-400 rounded-sm"></div>
                    </div>
                  </div>
                  <div
                    className={`text-3xl font-bold mb-4 ${plan.isPremium ? "text-purple-900" : "text-white"}`}
                  >
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    <span className="text-lg font-normal">
                      /{isAnnual ? "year" : "mo"}
                    </span>
                  </div>
                  <div className="text-sm mb-4">
                    {plan.isPremium ? "5678" : "1234"}{" "}
                    {plan.isPremium ? "9012" : "5678"} **** ****
                  </div>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span
                          className={`w-1.5 h-1.5 ${plan.isPremium ? "bg-purple-900" : "bg-gray-400"} rounded-full mr-2`}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-white text-opacity-80 text-sm">
                      Valid thru: 12/25
                    </div>
                    <Wifi
                      className={`h-6 w-6 ${plan.isPremium ? "text-blue-300" : "text-white text-opacity-80"}`}
                    />
                  </div>
                  <Button
                    className={`w-full transition-colors duration-300 ${
                      plan.isPremium
                        ? "bg-purple-900 hover:bg-purple-950 text-white"
                        : ""
                    }`}
                  >
                    Choose Plan
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
