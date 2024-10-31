import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { signInAction } from "@/actions/auth-action";

const Navbar = () => {
  return (
    <>
      <div className="border-b border-background   backdrop-blur-md fixed top-0 left-0 right-0 w-full z-50">
        <div className="max-w-7xl m-auto p-3">
          <div className="flex items-center h-10 justify-between">
            <div>
              <Image src="/logo.svg" alt="logo" width={40} height={40} />
            </div>
            <div className="flex items-center gap-x-4">
              <form action={signInAction}>
                <Button>Login</Button>
              </form>
              <Button className="sm:block hidden" variant="secondary">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
