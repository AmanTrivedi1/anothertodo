"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { getGreeting } from "@/util/greeting";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const UserProfile = () => {
  const { data: session } = useSession();
  if (!session) return null;

  const message = `Let's tackle your tasks for today, ${session.user?.name || "User"}! Keep up the great work!`;

  return (
    <div className="h-screen flex items-center justify-center bg-black/20 backdrop-blur-xl border-white/10 relative overflow-hidden">
      <Card className="w-full max-w-md   ">
        <CardHeader className="flex flex-col ">
          <div className="flex items-center gap-x-4 ">
            <Image
              src={
                session.user?.image ||
                "https://avatars.githubusercontent.com/u/124599?v=4"
              }
              width={80}
              height={80}
              className="rounded-full mb-4"
              alt="User profile picture"
            />
            <CardTitle className="mb-2">
              <p className="text-lg font-semibold">
                {getGreeting()}, {session.user?.name}!
              </p>
              <p className="text-sm text-neutral-400">{session.user?.email}</p>
            </CardTitle>
          </div>
          <CardContent>
            <p>{message}</p>
          </CardContent>
          <CardFooter>
            <Button>
              Start Writing <ArrowRight />
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
    </div>
  );
};

export default UserProfile;
