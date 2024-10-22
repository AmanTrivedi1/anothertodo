import React from "react";

interface HeadingProps {
  heading: string;
  subheading: string;
}

const Heading = ({ heading, subheading }: HeadingProps) => {
  return (
    <div className="max-w-xl my-2 m-auto p-2">
      <h1 className="text-center md:text-4xl sm:text-3xl text-2xl">
        {heading}
      </h1>
      <p className="text-center md:text-base sm:text-sm text-xs text-muted-foreground">
        {subheading}
      </p>
    </div>
  );
};

export default Heading;
