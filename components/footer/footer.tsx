"use client";
import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="max-w-7xl  mx-auto p-2">
        <footer className=" py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between justify-center  items-center">
              <div className="mb-4 md:block hidden md:mb-0">
                <h1 className="text-2xl font-bold ">AnotherTodo</h1>
                <p className="text-sm">Organize your tasks effortlessly</p>
              </div>
              <div className="md:hidden my-10">
                <h1 className="text-2xl text-center  font-bold">AnotherTodo</h1>
                <p className="text-sm text-center">
                  Organize your tasks effortlessly
                </p>
              </div>
              {/* Links Section */}
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a
                  href="/about"
                  className="hover:underline line-clamp-1 text-sm"
                >
                  About Us
                </a>
                <a
                  href="/features"
                  className="hover:underline line-clamp-1 text-sm"
                >
                  Features
                </a>
                <a
                  href="/pricing"
                  className="hover:underline line-clamp-1 text-sm"
                >
                  Pricing
                </a>
                <a
                  href="/contact"
                  className="hover:underline line-clamp-1 text-sm"
                >
                  Contact
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </Link>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <TwitterIcon />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
