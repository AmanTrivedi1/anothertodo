import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <div className="border-b border-background   backdrop-blur-md fixed top-0 left-0 right-0 w-full z-50">
        <div className="max-w-7xl m-auto p-3">
          <div className="flex items-center h-10 justify-between">
            <div>
              <h1>Another Todo</h1>
            </div>
            <div className="flex items-center gap-x-4">
              <Button variant="link">Login</Button>
              <Button variant="secondary">Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
